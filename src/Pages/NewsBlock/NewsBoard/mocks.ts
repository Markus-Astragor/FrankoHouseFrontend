import TeenagerImg from "../../../assets/NewsBoardImages/tvm-0 1.png";

type NewsMockData = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
};

type FullNewsMockData = {
  id: number;
  image: string;
  title: string;
  description: string;
  fullDescription: string;
  date: string;
};

export const data: NewsMockData[] = [];
export const fullData: FullNewsMockData[] = [];

const mockDataLength = 20;

for (let i = 1; i < mockDataLength; i++) {
  const mockObj: NewsMockData = {
    id: i,
    image: TeenagerImg,
    title: `«Тінейджер в музеї ${i}»`,
    description:
      "В Домі Франка тривала Літня школа музейних лідерів ««Тінейджер в музеї»» для учнів львівських шкіл віком від 10 до 14 років. Мета літньої школи – підвищити інтерес підлітків до культурної спадщини, сприяти їхній соціальній інтеграції та комунікації між особами з різними зацікавленнями та фізичними можливостями....",
    date: "10–15 червня 2019 р",
  };

  const fullDataObj: FullNewsMockData = {
    id: i,
    image: TeenagerImg,
    title: `«Тінейджер в музеї ${i}»`,
    description:
      "В Домі Франка тривала Літня школа музейних лідерів ««Тінейджер в музеї»» для учнів львівських шкіл віком від 10 до 14 років. Мета літньої школи – підвищити інтерес підлітків до культурної спадщини, сприяти їхній соціальній інтеграції та комунікації між особами з різними зацікавленнями та фізичними можливостями....",
    fullDescription: `This is the text which is hidden in short news and is shown when user opens full piece of news page ${i}`,
    date: "10–15 червня 2019 р",
  };

  data.push(mockObj);
  fullData.push(fullDataObj);
}
