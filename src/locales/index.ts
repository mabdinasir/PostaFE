import messages_ar from "./arabic.json";
import messages_en from "./english.json";
import messages_so from "./somali.json";

type Message<T = string | string[] | number | number[]> = T;

interface Messages<T = string | string[] | number | number[]> {
  [key: string]: Message<T>;
}

interface Languages<T = string> {
  [key: string]: Messages<T> | Message<T>[];
}

const messages: Languages<string | string[] | number | number[]> = {
  en: messages_en,
  so: messages_so,
  ar: messages_ar,
};

const language = "en" as keyof typeof messages;

export { language, messages };
