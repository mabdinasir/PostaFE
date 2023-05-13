import messages_ar from "./arabic.json";
import messages_en from "./english.json";
import messages_so from "./somali.json";

interface Messages {
  [key: string]: string | string[];
}

interface Languages {
  [key: string]: Messages;
}

const messages: Languages = {
  en: messages_en,
  so: messages_so,
  ar: messages_ar,
};

const language = "en" as keyof typeof messages;

export { language, messages };
