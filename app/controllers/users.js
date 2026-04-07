const { isValidObjectId } = require("mongoose");
const db = require("../models");

const { User } = db;

const buildValidationResponse = (message, data = {}) => ({
  message,
  data
});

const normalizePhoneNumber = (phoneNumber) => {
  if (phoneNumber === undefined || phoneNumber === null || phoneNumber === "") {
    return undefined;
  }

  const parsedNumber = Number(phoneNumber);
  return Number.isFinite(parsedNumber) ? parsedNumber : phoneNumber;
};

const getDatabaseErrorPayload = (error) => {
  if (error?.name === "ValidationError") {
    return {
      status: 400,
      payload: buildValidationResponse("Validation failed.", {
        errors: error.errors
      })
    };
  }

  if (error?.code === 11000) {
    return {
      status: 409,
      payload: buildValidationResponse("A user with this email already exists.")
    };
  }

  return {
    status: 500,
    payload: buildValidationResponse("Unexpected server error.")
  };
};

const ensureValidObjectId = (id, res) => {
  if (!isValidObjectId(id)) {
    res.status(400).json(
      buildValidationResponse("Invalid user id.", {
        givenId: id
      })
    );
    return false;
  }

  return true;
};

module.exports = {
  // Retrieve all users. Query params are passed through for lightweight filtering.
  async findAll(req, res) {
    try {
      const users = await User.find(req.query).sort({ createdAt: -1 });
      return res.json(users);
    } catch (error) {
      const { status, payload } = getDatabaseErrorPayload(error);
      return res.status(status).json(payload);
    }
  },

  async findById(req, res) {
    const { id } = req.params;

    if (!ensureValidObjectId(id, res)) {
      return undefined;
    }

    try {
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json(
          buildValidationResponse("User not found.", {
            givenId: id
          })
        );
      }

      return res.json(user);
    } catch (error) {
      const { status, payload } = getDatabaseErrorPayload(error);
      return res.status(status).json(payload);
    }
  },

  async create(req, res) {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json(
        buildValidationResponse("Request body is required.", {
          givenData: req.body
        })
      );
    }

    const payload = {
      ...req.body,
      phone_num: normalizePhoneNumber(req.body.phone_num)
    };

    try {
      const createdUser = await User.create(payload);
      return res.status(201).json(createdUser);
    } catch (error) {
      const { status, payload: errorPayload } = getDatabaseErrorPayload(error);
      return res.status(status).json(errorPayload);
    }
  },

  async update(req, res) {
    const { id } = req.params;

    if (!ensureValidObjectId(id, res)) {
      return undefined;
    }

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json(
        buildValidationResponse("Update payload is required.", {
          givenData: req.body
        })
      );
    }

    const payload = {
      ...req.body,
      phone_num: normalizePhoneNumber(req.body.phone_num)
    };

    try {
      const updatedUser = await User.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
      });

      if (!updatedUser) {
        return res.status(404).json(
          buildValidationResponse("User not found.", {
            givenId: id
          })
        );
      }

      return res.json(updatedUser);
    } catch (error) {
      const { status, payload: errorPayload } = getDatabaseErrorPayload(error);
      return res.status(status).json(errorPayload);
    }
  },

  async remove(req, res) {
    const { id } = req.params;

    if (!ensureValidObjectId(id, res)) {
      return undefined;
    }

    try {
      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
        return res.status(404).json(
          buildValidationResponse("User not found.", {
            givenId: id
          })
        );
      }

      return res.json(deletedUser);
    } catch (error) {
      const { status, payload } = getDatabaseErrorPayload(error);
      return res.status(status).json(payload);
    }
  }
};
