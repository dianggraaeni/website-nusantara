
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askCulturalSage = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `Anda adalah "Sang Penjaga Budaya Nusantara", seorang ahli sejarah dan budaya Indonesia. 
        Berikan jawaban yang edukatif, penuh hormat, dan menginspirasi tentang kekayaan budaya Indonesia. 
        Gunakan bahasa Indonesia yang elegan namun mudah dipahami generasi muda.
        Jika ditanya tentang sejarah, tradisi, atau bahasa, berikan konteks filosofisnya.`,
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, Sang Penjaga Budaya sedang bermeditasi. Silakan coba lagi nanti.";
  }
};
