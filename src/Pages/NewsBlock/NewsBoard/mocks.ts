import TeenagerImg from "../../../assets/NewsBoardImages/tvm-0 1.png";

interface NewsMockData {
  image: string;
  title: string;
  shortText: string;
  timeStamp: string;
}

export const data: NewsMockData[] = [];

const mockDataLength = 20;

for (let i = 1; i < mockDataLength; i++) {
  const mockObj: NewsMockData = {
    image: TeenagerImg,
    title: `«Тінейджер в музеї ${i}»`,
    // description
    shortText:
      "В Домі Франка тривала Літня школа музейних лідерів ««Тінейджер в музеї»» для учнів львівських шкіл віком від 10 до 14 років. Мета літньої школи – підвищити інтерес підлітків до культурної спадщини, сприяти їхній соціальній інтеграції та комунікації між особами з різними зацікавленнями та фізичними можливостями....",
    timeStamp: "10–15 червня 2019 р", // date
  };

  data.push(mockObj);
}
