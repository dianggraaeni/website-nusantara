
export interface HistoryEvent {
  year: string;
  title: string;
  description: string;
  island: string;
}

export interface LanguageItem {
  phrase: string;
  translation: string;
  region: string;
}

export interface TraditionItem {
  name: string;
  description: string;
  philosophy: string;
  image: string;
  category: 'Upacara' | 'Tarian' | 'Pakaian';
}

export interface ScriptItem {
  char: string;
  latin: string;
  meaning: string;
  origin: string;
}
