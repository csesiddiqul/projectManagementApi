import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema(
  {
    department_title: {
      type: String,
      Comment: 'The title of the department'
    },
    department_lead: {
      type: String,
      Comment:' The name of the department lead'
    },
    description: {
      type: String,
      Comment: 'A brief description of the department'
    },
    status: {
      type: String,
      Comment: "The status of the department 0= active , 1= de-active"
    },
    type: {
      type: String,
      Comment: 'Type 1 = department, Type 2 = department_model'
    },
    model_title: {
      type: String,
      Comment: 'The title of the department model (if applicable)'
    },
    department_id: {
      type: Number,
      Comment: 'The unique ID of the department'
    },
    point: {
      type: Number,
      Comment: 'A numeric value associated with the department'
    },
  }
);

// Create a model using the schema
const Department = mongoose.model('Department', departmentSchema);

export default Department;
