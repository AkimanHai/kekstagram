//Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:
const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  //Максимум и минимум включаются
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomIntInclusive(0, 10);


//Функция для проверки максимальной длины строки.

const isPassesLength = (str, count) => {
  return str.length <= count;
};

isPassesLength('Hello, World!', 140);


const COUNT_OBJ = 25;
const DESCRIPTIONS = [
  'Отлично!',
  'Хорошо.',
  'Нормально',
  'Фуу.',
  'Отвратительно!',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. ',
  'В конце концов это просто непрофессионально. ',
];
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
let serialNomer = 0;
let serialId = 0;
let serialCommentId = 0;

const getSerialNomer = () => {
  return serialNomer += 1;
};

const getSerialId = () => {
  return serialId += 1;
};

const getSerialCommentId = () => {
  return serialCommentId += 1;
};

const getCommentMessage = () => {
  if (getRandomIntInclusive(1, 2) === 2) {
    return MESSAGES[getRandomIntInclusive(0, MESSAGES.length - 1)] + MESSAGES[getRandomIntInclusive(0, MESSAGES.length - 1)];
  } else {
    return MESSAGES[getRandomIntInclusive(0, MESSAGES.length - 1)];
  }
};

const createComment = () => {
  return {
    id: getSerialCommentId(),
    avatar: 'img/avatar-' + getRandomIntInclusive(1, 6) + '.svg',
    message: getCommentMessage(),
    name: NAMES[getRandomIntInclusive(0, NAMES.length - 1)],
  };
}

const createPhotoDescription = () => {
  return {
    id: getSerialNomer(),
    url: 'photos/' + getSerialId() + '.jpg',
    description: DESCRIPTIONS[getRandomIntInclusive(0, DESCRIPTIONS.length - 1)],
    likes: getRandomIntInclusive(15, 200),
    comments: createComment(),
  }
};


const similarDescription = new Array(COUNT_OBJ).fill(null).map(() => createPhotoDescription());
similarDescription();
