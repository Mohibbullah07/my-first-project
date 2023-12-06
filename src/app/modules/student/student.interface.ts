export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type Guardian = {
  fatherName: string
  fatherContractNo: string
  fatherOccupation: string
  motherName: string
  motherContractNo: string
  motherOccupation: string
}

export type LocalGuardian = {
  name: string
  ocupation: string
  contractNo: string
  address: string
}
export type Student = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contractNo: string
  emergencyContractNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localGuardian: LocalGuardian
  profileImg?: string
  active: 'active' | 'blocked'
}
