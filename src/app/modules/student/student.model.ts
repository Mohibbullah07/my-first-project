import { Schema, model } from 'mongoose'
import { Guardian, LocalGuardian, Student, UserName } from './student.interface'

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherContractNo: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  motherName: { type: String, required: true },
  motherContractNo: { type: String, required: true },
  motherOccupation: { type: String, required: true },
})

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  ocupation: { type: String, required: true },
  contractNo: { type: String, required: true },
  address: { type: String, required: true },
})

export const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contractNo: { type: String, required: true },
  emergencyContractNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  active: ['active', 'blocked'],
})

export const StudentModel = model<Student>('Student', studentSchema)
