import axios from "axios";

const localize =  async (text, locale) => {
  const apiKey = 'AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw';
  const apiUrl = 'https://translation.googleapis.com/language/translate/v2';

  const data = {
    q: text,
  };
  try {
    if (locale === "uk") {
      return text;
    } else {
      const translation = await axios
        .post(
          apiUrl,
          data,
          {
            params:
            {
              key: apiKey,
              target: locale
            }
          })
      return translation?.data?.data?.translations[0]?.translatedText;
    }
  } catch (error) {
    console.error('Translation error:', error);
  }
};

export default localize;