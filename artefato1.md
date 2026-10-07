# Template de entrega

## Identificação

| Campo | Informação |
|---|---|
| Título | Artefato 1 — Gestão do Negócio/Domínio e Gestão do Projeto |
| Projeto | Rede Solidária: Gerenciamento de ONGs pequenas e médias do DF |
| Data | 07/10/2026 |
| Disciplina | Projeto Integrador |
| Turma | [Informar a turma] |
| Instituição | CEUB |
| Organização no GitHub | CampusCEUB |
| Repositório | RedeSolidaria |
| Professora responsável | Adriana Falcomer |
| ID do Projeto | [Informar o ID conforme o Portfólio de Projetos de TI do CEUB] |

**Equipe e papéis**

| Integrante | Papel | E-mail |
|---|---|---|
| Bruna Bonifácio Soares Santos | Product Owner (PO) | bruna.bonifacio@sempreceub.com |
| Renata Teixeira de Jesus | Scrum Master (SM) | renata.teixeira@sempreceub.com |
| Rafael Ramos | Administrador de Dados (AD / DBA) | rafael.rcarvalho@sempreceub.com |
| Arthur Amaral dos Santos | Dev Team | arthur.amaral@sempreceub.com |
| Ana Clara de Almeida Coelho | Dev Team | anaclara0811@sempreceub.com |

**Contexto do projeto**

- **Problema:** pequenas e médias ONGs do Distrito Federal enfrentam dificuldades na gestão de doações físicas (alimentos, higiene, vestuário e insumos hospitalares). A dependência da divulgação informal em redes sociais gera alta volatilidade na captação, causando desequilíbrio de estoque (superávit de alguns itens, com risco de vencimento, e escassez crítica de outros). A ausência de uma ferramenta centralizada e transparente também gera insegurança no doador, que desiste de ajudar por não saber o que é mais urgente nem qual será o impacto de sua doação.
- **Solução proposta:** plataforma digital (Web/Mobile) que centraliza os pedidos das ONGs em tempo real, usa um "Termômetro de Urgência" para ranquear prioridades e oferece rastreabilidade via check-in (QR Code/ID) para prestar contas ao doador.
- **Público atendido:** pequenas e médias ONGs do DF, doadores locais e gestores de projetos sociais.
- **Valor esperado:** eliminação do desperdício de insumos, direcionamento assertivo das doações para urgências reais, facilitação logística por geolocalização e geração de dados estratégicos (BI) sobre vulnerabilidade social na região.

## Sprint relacionada

Esta entrega consolida o roadmap do produto e o acompanhamento das **Sprints 01 e 02**, que dão início ao MVP:

| Sprint | Tema | Período | Situação em 07/10/2026 |
|---|---|---|---|
| Sprint 00 | Planejamento (papéis, acordos de trabalho e backlog inicial) | — | Encerrada |
| Sprint 01 | Refinamento do Backlog, Modelagem e Arquitetura | 24/09/2026 a 01/10/2026 | Encerrada; Sprint Review em 02/10/2026; PRs das issues #34 e #36 aguardando revisão |
| Sprint 02 | Cadastro de ONGs e Autenticação | 07/10/2026 a 21/10/2026 | Em início (planejada) |

O projeto trabalha com sprints de duas semanas, cada uma com planejamento, execução, revisão (Sprint Review) e retrospectiva. Os registros completos estão nos documentos `sprint-00.md`, `sprint-01.md` e `sprint-02.md`.

## Escopo

**Composição da entrega**

1. **Roadmap do produto** revisado: ajustes de escopo e divisão em MVP e duas releases.
2. **Sprint 01:** refinamento do backlog em issues no GitHub, modelagem de dados (DER e dicionário) e documentação da arquitetura com o stack definido.
3. **Sprint 02:** planejamento do cadastro de ONGs de ponta a ponta, com validação, armazenamento, autenticação, layout responsivo e testes.
4. **Gestão do backlog** no GitHub (issues, épicos e Project).

**Roadmap do produto**

*Ajustes de escopo após o refinamento*

| Item | Versão inicial da proposta | Ajuste após refinamento |
|---|---|---|
| Notificação de item crítico | Fora do escopo do MVP | Adicionada ao MVP (RF12), por ser simples de implementar e ter alto impacto na motivação 1. No MVP, o alerta aparece na tela; o envio por e-mail/push fica para a Release 2 |
| Geolocalização avançada (raio de busca, rotas) | Junto com a busca básica | Separada para a Release 3; o MVP usa apenas ordenação por distância |
| Relatórios de BI | Prevista para o MVP | Movida para a Release 2, pois depende de volume mínimo de dados de uso real |
| Autenticação | Login simples por e-mail e senha | Mantido no MVP; login social fica como possível item de backlog futuro |

*Roadmap por release*

| Release | Funcionalidades | Objetivo atendido | Previsão |
|---|---|---|---|
| MVP | Cadastro de doador e instituição; autenticação; registro e acompanhamento de demandas; termômetro de urgência; registro de doações; geração de QR code; check-in de entrega; histórico básico; alerta de item crítico na tela | Objetivos 1, 2 e 3 | Semana 8 |
| Release 2 | Relatórios de BI (itens mais demandados por período e região); notificação por e-mail/push de item crítico | Objetivos 2 e 5 | Semana 12 |
| Release 3 | Geolocalização avançada (raio de busca, estimativa de rota); expansão para novas regiões do DF | Objetivo 4 | Semana 16 |

As previsões estão em semanas do projeto e precisam ser recalibradas contra o calendário das sprints (ver *Pendências conhecidas*).

**Sprint 01 — Refinamento do Backlog, Modelagem e Arquitetura**

*Objetivo:* refinar e fatiar o Backlog do Produto em issues classificadas por tipo (Epic, Feature, PBI e Task), entregar a modelagem de dados (DER e dicionário de dados) e documentar a arquitetura com o stack definido, deixando o time pronto para implementar na Sprint 02.

| Issue | Tipo | Item de backlog | Responsável | Situação |
|---|---|---|---|---|
| [#34](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/34) | Documentação | Modelagem de dados (DER e dicionário de dados) | Rafael Ramos | Aberta, com PR vinculado |
| [#36](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/36) | Documentação | Correção e atualização do `arquitetura.md` com stack definida | Arthur Amaral e Ana Clara | Aberta, com PR vinculado |
| — | Planejamento | Refinamento do backlog e criação das issues #9 a #31 | Renata Teixeira e Bruna Bonifácio | Concluído |

*Refinamento do backlog:* as issues foram classificadas por tipo e prefixadas pela camada do sistema (`[FRONT]`, `[BACK]`, `[FRONT/BACK]`, `[TEST]`, `[RNF]`). Dois épicos organizam o MVP:

| Épico | Issues relacionadas |
|---|---|
| [#25 — Cadastro de Instituições (ONGs)](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/25) | #27, #28, #29, #14, #23, #24, #31 |
| [#26 — Cadastro do Doador](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/26) | #15, #21, #11 |

Também foram registrados os requisitos não funcionais #18 (interface responsiva, mobile first) e #19 (proteção de dados sensíveis, LGPD), além de itens de geolocalização (#17, #20, #22) e logística (#9, #10, #12, #30), que ficam para as próximas sprints.

*Sprint Review (02/10/2026):* foram demonstrados a organização do backlog no GitHub (épicos, features, PBIs e RNF), o DER com as principais entidades e o stack definido no documento de arquitetura.

*Métricas:* 23 issues criadas no refinamento (#9 a #31); 2 pull requests abertos.

**Sprint 02 — Cadastro de ONGs e Autenticação**

*Objetivo:* entregar o fluxo de cadastro de ONGs funcionando de ponta a ponta, com validação dos dados, armazenamento no banco e autenticação, além de validar o fluxo com dados fictícios.

| Issue | Tipo | Item de backlog | Responsável |
|---|---|---|---|
| [#27](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/27) | PBI | [BACK] Validação dos Dados Informados no Cadastro | Ana Clara |
| [#28](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/28) | PBI | [BACK] Armazenamento dos Dados das ONGs no Banco | Rafael Ramos |
| [#29](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/29) | PBI | [BACK] Salvamento dos Dados da ONG no Sistema | Rafael Ramos |
| [#15](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/15) | Feature | [FRONT/BACK] Implementação do Formulário de Autenticação | Arthur Amaral |
| [#18](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/18) | PBI | [RNF] Interface Responsiva (Mobile First) | Renata Teixeira |
| [#14](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/14) | Feature | [TEST] Validação do Cadastro da ONG | Bruna Bonifácio |
| [#13](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/13) | PBI | [TEST] Validação de Fluxo com Dados Fictícios | Bruna Bonifácio |

O escopo acima é a proposta do documento da sprint e ainda precisa ser confirmado contra a milestone.

*Backlog reservado para as próximas sprints:*

| Tema | Issues |
|---|---|
| Demandas e itens da ONG | #23, #24, #31, #30 |
| Doador | #26 (épico), #21, #11 |
| Geolocalização | #22, #17, #20, #10, #9 |
| Segurança (LGPD) | #19, #16 |
| Integrações | #12 |

**Situação do backlog no GitHub (captura de 01/10/2026):** 37 issues, sendo 33 abertas e 4 fechadas. O Project registra 2 épicos e 17 features; #12 e #15 estão *In progress*, #9 e #10 estão *To Do* e as demais features estão *New*.

## Links principais



- **Repositório:** https://github.com/CAMPUSCEUB/RedeSolidaria
- **Milestones:** https://github.com/CAMPUSCEUB/RedeSolidaria/milestones; [colar o link específico de cada milestone: Sprint 01 e Sprint 02]
- **Issues:** https://github.com/CAMPUSCEUB/RedeSolidaria/issues
  - Sprint 01: [#34](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/34) (DER e dicionário) e [#36](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/36) (arquitetura)
  - Épicos: [#25](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/25) e [#26](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/26)
  - Sprint 02: [#27](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/27), [#28](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/28), [#29](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/29), [#15](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/15), [#18](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/18), [#14](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/14) e [#13](https://github.com/CAMPUSCEUB/RedeSolidaria/issues/13)
- **Artefatos centrais:** Figura 1 — Roadmap do produto [roadmap.png](https://postimg.cc/F13nkfgf)

## Critérios atendidos



| Critério | Como foi demonstrado | Situação | Evidência |
|---|---|---|---|
| Revisão e atualização do roadmap | Quadro de ajustes de escopo e roadmap por release com objetivos e previsões | Atendido | Artefato 1, seção 1 |
| Papéis e organização do time | PO, SM, DBA e Dev Team definidos na Sprint 00 | Atendido | Documentos de sprint |
| Planejamento da Sprint 01 | Objetivo, escopo e responsáveis definidos | Atendido | `sprint-01.md` |
| Execução da Sprint 01 | Backlog refinado em 23 issues (#9 a #31), DER e dicionário e arquitetura em PRs | Parcial (PRs aguardando revisão) | Issues #34 e #36 |
| Revisão da Sprint 01 | Sprint Review em 02/10/2026 com backlog, DER e stack | Atendido (feedback a registrar) | `sprint-01.md` |
| Retrospectiva da Sprint 01 | Campos ainda sem registro | Pendente | `sprint-01.md` |
| Planejamento da Sprint 02 | Objetivo, escopo, responsáveis e backlog das próximas sprints | Atendido (escopo a confirmar) | `sprint-02.md` |
| Execução, revisão e retrospectiva da Sprint 02 | A sprint se inicia em 07/10/2026 | Pendente | A registrar até 21/10/2026 |
| Gestão do backlog no GitHub | Épicos, features, PBIs e tasks classificados por tipo e camada, com Project | Atendido | Issues #1 a #36 |
| Gestão de riscos | Riscos e ações registrados em cada sprint | Atendido | Documentos de sprint |

## Validação

| Verificação | Responsável | Resultado | Evidência |
|---|---|---|---|
| Sprint Review da Sprint 01 (backlog, DER e stack) | Equipe, com PO | Realizada em 02/10/2026; feedback e decisões a registrar | `sprint-01.md` |
| Revisão por outro membro dos PRs de documentação (acordo de trabalho) | Equipe | Pendente: PRs abertos para #34 e #36 | PRs a vincular |
| Validação do cadastro da ONG | Bruna Bonifácio (PO) | Planejada para a Sprint 02 | Issue #14 |
| Teste do fluxo com dados fictícios | Bruna Bonifácio (PO) | Planejada para a Sprint 02 | Issue #13 |
| Cadastro com validação e armazenamento no banco | Ana Clara e Rafael Ramos | Planejado para a Sprint 02 | Issues #27, #28 e #29 |
| Login pelo formulário de autenticação | Arthur Amaral | Planejado para a Sprint 02 (issue em andamento) | Issue #15 |
| Layout responsivo em desktop e celular | Renata Teixeira | Planejado para a Sprint 02 | Issue #18 |

## Limitações

- O **MVP** usa apenas ordenação por distância; raio de busca e rotas ficam para a Release 3 (issues #9 e #10 no backlog).
- **Relatórios de BI** não fazem parte do MVP, pois dependem de volume mínimo de dados de uso real.
- **Login social** (issue #11) permanece como item de backlog futuro.
- O alerta de item crítico (RF12) aparece só na tela no MVP; o envio por e-mail/push fica para a Release 2.
- **Dados reais de ONGs do DF** são de difícil obtenção; por isso o fluxo é validado com dados fictícios (issue #13).
- **Sobrecarga de escopo:** itens como roteirização por GPS e scanner foram mantidos no backlog, fora do foco do MVP inicial.
- **Curva de aprendizado do stack** (risco alto na Sprint 02) e **integração entre frontend e banco** (risco médio).
- O Product Owner é um integrante da equipe; a validação não é feita com uma instituição parceira real.
- As releases 2 e 3 dependem da validação do MVP com instituições parceiras.

## Pendências conhecidas

- **Período da Sprint 01:** o documento indica 24/09 a 01/10/2026 e "2 semanas", mas o intervalo é de uma semana. Corrigir o período.
- **PRs #34 e #36:** concluir a revisão, fazer o merge e fechar as issues.
- **Sprint 01:** registrar o feedback e as decisões da Sprint Review, a retrospectiva e as métricas de conclusão.
- **Sprint 02:** confirmar o escopo na milestone, registrar o status de cada item e atribuir milestone e assignee a todas as issues.
- **Itens em andamento fora da Sprint 02:** a issue #12 (scanner com banco externo) está *In progress* e as issues #9 e #10 estão *To Do*, mas ficam fora do escopo planejado da sprint.
- **Issues #1 a #8** (features de interface, QR code e painel) existem no repositório, mas não constam no escopo da Sprint 01. Indicar a sprint de origem.
- **Project:** os campos de sprint, assignees, estimativa e trabalho restante estão vazios.
- **Possível duplicidade:** as issues #5 e #31 têm o mesmo título ("Painel Administrativo da ONG (Dashboard)").
- **Previsões das releases:** recalibrar as semanas 8, 12 e 16 contra o calendário.
- Preenchimento do **ID do Projeto**, da **turma** e dos links de milestone, Project e PRs.

## Próximos passos

1. Concluir a revisão e o merge dos PRs das issues #34 e #36 e fechar as issues.
2. Registrar o feedback, as decisões e a retrospectiva da Sprint 01.
3. Executar a Sprint 02 (07/10 a 21/10/2026): cadastro de ONGs com validação e armazenamento, autenticação, layout responsivo e testes com dados fictícios.
4. Realizar a Sprint Review e a retrospectiva da Sprint 02 e registrar métricas e evidências (capturas de tela, vídeo e resultados de teste).
5. Definir o escopo da Sprint 03 a partir do backlog restante (demandas, doador, geolocalização, LGPD e integrações) e do que o roadmap exige para fechar o MVP.
6. Aplicar nas próximas sprints as ações das retrospectivas (por exemplo, revisar PRs com prazo curto e atribuir assignee e milestone em todas as issues).
7. Atualizar o Artefato 1 com os dados reais das sprints e as previsões recalibradas.
8. Validar o MVP com instituições parceiras e planejar as Releases 2 (BI e notificações) e 3 (geolocalização avançada e expansão regional).