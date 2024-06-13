export type museumInfoProps = {
  urkTitle: string;
  ukrWorkingHours: string;
  ukrAddress: string;
  engTitle: string;
  engWorkingHours: string;
  engAddress: string;
  link: string;
  phone: string;
  email: string;
};

export type MuseumData = {
  _id: string;
  title: string;
  workingHours: string;
  phone: string;
  address: string;
  link: string;
  photo: [string];
  email: string;
};
