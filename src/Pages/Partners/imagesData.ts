import AudioStories from "../../assets/partners/Audiostories.png";
import FrankoHouse from "../../assets/partners/Franko-House.png";
import Fundaciya from "../../assets/partners/Fundaciya.png";
import ItStepUni from "../../assets/partners/it-step-university.png";
import Komunalni from "../../assets/partners/komynalni-platezi.png";
import Lviv from "../../assets/partners/lviv.png";
import LvivRada from "../../assets/partners/lviv-rada.png";
import Museum from "../../assets/partners/museum.png";
import Plast from "../../assets/partners/plast.png";
import SyspilneOdesa from "../../assets/partners/syspilne-odesa.png";

type images = {
  image: string;
  link: string;
};

export const imagesArr: images[] = [
  { image: AudioStories, link: "https://www.audiostories.pro/" },
  { image: FrankoHouse, link: "https://www.facebook.com/dimfranka/" },
  { image: Fundaciya, link: "https://www.facebook.com/ZminFoundation/" },
  { image: ItStepUni, link: "https://itstep.edu.ua/" },
  {
    image: Komunalni,
    link: "https://micto.ua/lvivskyi-oblasnyi-hospital-invalidiv-viiny-ta-represovanykh-im-yu-lypy-i158940/",
  },
  { image: Lviv, link: "https://old.loda.gov.ua/news?id=42582" },
  { image: LvivRada, link: "https://city-adm.lviv.ua/" },
  { image: Museum, link: "" },
  { image: Plast, link: "https://www.plast.org.ua/" },
  { image: SyspilneOdesa, link: "https://od.suspilne.media/" },
];
