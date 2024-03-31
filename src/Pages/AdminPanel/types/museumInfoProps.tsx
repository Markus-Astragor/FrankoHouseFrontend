export type museumInfoProps = {
  urkMuseumTitle: string;
  UkrWorkingHr: string;
  UkrAddress: string;
  EnMuseumTitle: string;
  EnWorkingHr: string;
  EnAddress: string;
  link: string;
  phone: string;
  email: string;
};

export type MuseumInfoPropsWithId = museumInfoProps & {
  _id: string;
};
