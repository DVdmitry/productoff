import { InMemoryDbService} from 'angular-in-memory-web-api';
import { ProductGroup} from './shopping/product-group/product-group';
import { Product} from './shopping/product';
import { NaviLinks } from './navbar/navi-links';
import { Pict } from './main-pict/pict';

export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const productGroups: ProductGroup[] = [
      new ProductGroup(100, 'Овощи-фрукты', 'https://s3.amazonaws.com/znizhki/product-group/fruits.jpg',
        [
          new Product (101,  'Бананы', 'Корона', 'кг', 2.3, 2.0, 2.2, 1, 1, 1, 1),
          new Product (102,  'Огурцы', 'Простор', 'кг', 3.0, 2.0, 2.8, 1, 1, 1, 1),
          new Product (103,  'Помидоры', 'Соседи', 'кг', 1.5, 1.0, 1.4, 1, 1, 1, 1),
        ]),
      new ProductGroup(200, 'Хлебобулочные изделия', 'https://s3.amazonaws.com/znizhki/product-group/bread.jpg',
        [
          new Product (201,  'Хлеб "Купаловский"', 'Mart Inn', '400г.', .7, .49, .6, 1, 1, 1, 1),
          new Product (202,  'Булочка с корицей', 'Врублевский', '80г', 3.0, 2.0, 2.9, 1, 1, 1, 1),
          new Product (203,  'Батон "Обычный"', 'Алми', '800г', 1.5, 1.0, 1.4, 1, 1, 1, 1),
        ]),
      new ProductGroup(300, 'Молочная продукция', 'https://s3.amazonaws.com/znizhki/product-group/milk.jpg', [
        new Product (301,  'Молоко 1.5% жирн. "Савушкин продукт"', 'Корона', '880г', 1.3, 1.0, 1.2, 1, 1, 1, 1),
        new Product (302,  'Сметана 20% жирн. "Родная сторона"', 'Простор', '440г', 1.8, 1.4, 1.9, 1, 1, 1, 1),
        new Product (303, 'Творог 9% жирн. "Минская марка"', 'Соседи', '200г', 1.2, 1.0, 1.1, 1, 1, 1, 1),
      ]),
      new ProductGroup(400, 'Мясо-колбасы', 'https://s3.amazonaws.com/znizhki/product-group/sausage.jpg', [
        new Product (401,  'Колбаса "Докторская" выр. высш сорт', 'Корона', 'кг', 6.3, 5.0, 6.1, 1, 1, 1, 1),
        new Product (402, 'Сосиски "Мишутка"', 'Простор', '330г', 4.0, 3.0, 3.8, 1, 1, 1, 1),
        new Product (403, 'Свинина, высш.сорт', 'Соседи', 'кг', 9.5, 8.0, 9.2, 1, 1, 1, 1),
      ]),
      new ProductGroup(500, 'Сладости', 'https://s3.amazonaws.com/znizhki/product-group/candy.jpg', [
        new Product (501, 'Торт "Пражский"', 'Корона',  'кг', 12.3, 10.0, 12.0, 1, 1, 1, 1),
        new Product (502,  'Конфеты "Красная шапочка"', 'Простор', 'кг', 9.0, 8.0, 8.8, 1, 1, 1, 1),
        new Product (503, 'Шоколад "Спартак"', 'Соседи', 'кг', 1.5, 1.0, 1.4, 1, 1, 1, 1),
      ])
    ];
    const naviLinks: NaviLinks[] = [
      new NaviLinks('/about', 'О проекте'),
      new NaviLinks('/shopping', 'Закупиться'),
      new NaviLinks('/contacts', 'Контакты'),
      new NaviLinks('/partners', 'Партнеры')
    ];
    const mainPicts: Pict[] = [
      new Pict('https://s3.amazonaws.com/znizhki/carousel/coffee.jpg', 'Организация качественного питания в семье — это во многом вопрос традиций, однако имеет значение и материальный фактор'),
      new Pict('https://s3.amazonaws.com/znizhki/carousel/bread.jpg', 'Если семье приходится сводить концы с концами, люди выбирают более доступные по цене, а не лучшие по качеству продукты'),
      new Pict('https://s3.amazonaws.com/znizhki/carousel/fish.jpg', 'По данным белстата, в 2016 году продолжила снижаться покупательная способность населения. За зарплату можно приобрести все меньше товаров и продуктов питания в том числе'),
      new Pict('https://s3.amazonaws.com/znizhki/carousel/kebab.jpg', 'Доля тех, у кого хватает денег только на питание, увеличилась за последние три года с 24,7% до 29,6%.'),
      new Pict('https://s3.amazonaws.com/znizhki/carousel/mushrooms.jpg', 'С нашим сервисом Вы сможете значительно экономить на продуктах питания - до 50% от стоимости чека')
    ];

    return {productGroups, naviLinks, mainPicts};
  }
}
