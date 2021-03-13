import mongoose, { Schema, Document } from "mongoose";

const { Schema: BuildSchema, model } = mongoose;

export interface message extends Document {
  name: string;
  email: string;
  message: string;
}

const defaultTypes = {
  type: String,
  required: true
};

const MessageSchema: Schema = new BuildSchema({
  name: defaultTypes,
  email: defaultTypes,
  message: defaultTypes
});

export default model<message>("Message", MessageSchema);
