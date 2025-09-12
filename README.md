# Water Reminder — Extensão Chrome (MV3)


Extensão simples que lembra o usuário de beber um copo de água periodicamente (padrão: 30 minutos). Desenvolvido para propósito didático (Bootcamp / Tarefa de curso).


## Funcionalidades
- Notificações periódicas via `chrome.alarms` + `chrome.notifications`.
- Popup para ligar/desligar, ajustar intervalo e testar notificação.
- Uso de `chrome.storage` para persistir preferências.


## Instalação local
1. Baixe/clone o repositório
2. Em `chrome://extensions`, ative *Developer mode*
3. `Load unpacked` → selecione a pasta do projeto


## Publicação
- Crie uma Release com o `.zip` para facilitar o download
- Configure GitHub Pages (branch `main`, pasta `/docs`) para publicar `docs/index.html`


## Permissões
- `alarms`, `storage`, `notifications` (apenas o mínimo necessário)


## Licença
MIT