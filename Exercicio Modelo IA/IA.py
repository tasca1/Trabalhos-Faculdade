import os
from langchain_groq import ChatGroq
from langchain.prompts import ChatPromptTemplate



api_key = ''
os.environ['GROQ_API_KEY'] = api_key


chat = ChatGroq(model='llama-3.3-70b-versatile')

def resposta_bot(mensagens):

  mensagens_modelo = [('system', 'Você é um especialista em hardware de PC e otimização de jogos. Você responde de forma direta, técnica mas bem-humorada, dando dicas de como evitar gargalos no setup, melhorar o FPS em jogos competitivos e escolher as melhores peças.')]
  
  mensagens_modelo += mensagens
  template = ChatPromptTemplate.from_messages(mensagens_modelo)
  chain = template | chat
  return chain.invoke({}).content

print('='*50)
print('Bem-vindo ao PC Expert AI! (Digite x para sair)')
print('='*50)

mensagens = []
while True:
  pergunta = input('\\nUsuário: ')
  if pergunta.lower() == 'x':
    break
  
  mensagens.append(('user', pergunta))
  resposta = resposta_bot(mensagens)
  mensagens.append(('assistant', resposta))
  
  print(f'\\nBot Expert: {resposta}')

print('\\nMuito obrigado por usar o PC Expert AI. Até a próxima atualização de drivers!')
