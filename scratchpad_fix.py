import os

path = 'src/i18n/translations.ts'

with open(path, 'r', encoding='utf-8') as f:
    code = f.read()

interface_old = """  contact: {
    bookCall: string;
    email: string;
    whatsapp: string;
    orDirect: string;
    whatsappMessage: string;
  };"""

interface_new = """  contactModal: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    detailsLabel: string;
    detailsPlaceholder: string;
    proceedLabel: string;
    btnWhatsapp: string;
    btnEmail: string;
    btnMeeting: string;
    whatsappMessagePrefix: string;
  };"""

en_old = """    contact: {
      bookCall: 'Book a Call',
      email: 'Email',
      whatsapp: 'WhatsApp',
      orDirect: 'or contact me directly',
      whatsappMessage: "Hi Gustavo, I'd like to talk about a project."
    },"""

en_new = """           contactModal: {
      title: "Let's work together",
      subtitle: "Tell me a bit about you and your project.",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      detailsLabel: "Project Details",
      detailsPlaceholder: "I want to build a...",
      proceedLabel: "How would you like to proceed?",
      btnWhatsapp: "Send via WhatsApp",
      btnEmail: "Send via Email",
      btnMeeting: "Book a Meeting",
      whatsappMessagePrefix: "Hi Gustavo, my name is {name}. I'd like to talk about a project: {details}"
    },"""

pt_old = """    contact: {
      bookCall: 'Agendar Reunião',
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      orDirect: 'ou fale direto comigo',
      whatsappMessage: 'Olá Gustavo, gostaria de falar sobre um projeto.'
    },"""

pt_new = """    contactModal: {
      title: "Vamos trabalhar juntos",
      subtitle: "Me conte um pouco sobre você e seu projeto.",
      nameLabel: "Seu Nome",
      namePlaceholder: "João Silva",
      detailsLabel: "Detalhes do Projeto",
      detailsPlaceholder: "Gostaria de criar um...",
      proceedLabel: "Como prefere continuar?",
      btnWhatsapp: "Enviar por WhatsApp",
      btnEmail: "Enviar por E-mail",
      btnMeeting: "Agendar Reunião",
      whatsappMessagePrefix: "Olá Gustavo, meu nome é {name}. Gostaria de falar sobre um projeto: {details}"
    },"""

code = code.replace(interface_old, interface_new)
code = code.replace(en_old, en_new)
code = code.replace(pt_old, pt_new)

# fallback for double quotes
en_old_dq = en_old.replace("'", '"').replace('"Book a Call"', '"Book a Call"').replace('"Email"', '"Email"').replace('"WhatsApp"', '"WhatsApp"').replace('"or contact me directly"', '"or contact me directly"')
en_old_dq = """    contact: {
      bookCall: "Book a Call",
      email: "Email",
      whatsapp: "WhatsApp",
      orDirect: "or contact me directly",
      whatsappMessage: "Hi Gustavo, I'd like to talk about a project."
    },"""
code = code.replace(en_old_dq, en_new)

pt_old_dq = """    contact: {
      bookCall: "Agendar Reunião",
      email: "E-mail",
      whatsapp: "WhatsApp",
      orDirect: "ou fale direto comigo",
      whatsappMessage: "Olá Gustavo, gostaria de falar sobre um projeto."
    },"""
code = code.replace(pt_old_dq, pt_new)

with open(path, 'w', encoding='utf-8') as f:
    f.write(code)

print("Done")
