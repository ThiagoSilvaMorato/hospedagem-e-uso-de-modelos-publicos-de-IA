class Translator {
  static translator = null;

  static translate(textENG) {
    return [{ translated_text: "Legenda traduzida pelo modelo!" }];
  }
}

exports.Translator = Translator;
