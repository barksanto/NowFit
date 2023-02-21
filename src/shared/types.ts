// enum for page names
export enum SelectedPage{
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}

// define props of BenefitType
export interface BenefitType {
  icon: JSX.Element,
  title: string,
  description: string,
}

export interface ClassType{
  name: string,
  description?: string,
  image: string
}