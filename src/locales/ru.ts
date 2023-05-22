import { Locale } from './locale'

const ru: Locale = {
  name: 'Русский',
  code: 'ru',

  mainPagePreview: {
    greeting: 'Платформа лицензионных серверов Minecraft',
    toServers: 'К серверам'
  },

  servers: {
    SpectruMSteam: {
      name: 'SpectruMSteam',
      description: 'Сервер с модами. Create и SMP! В разработке...',
      info: ['Без лицензии', 'Моды', 'SMP'],
      icon: '/images/wrench.png'
    },
    'Hardcore SMP': {
      name: 'Hardcore SMP',
      description:
        'Мечтали поиграть в хардкор с друьзьями? ' +
        'Теперь ваша мечта сбылась! ' +
        'Минимальное количество плагинов, вы платите за свою смерть временем',

      icon: '/images/hcheart.png',
      info: ['1.19.4', 'Лицензия', 'Режим хардкор', 'SMP'],
      url: '/servers/hardcore'
    },
    'Talent of the Telepath': {
      name: 'Талант телепата',
      description: 'Сервер с заклинаниями. В разработке',
      icon: '/images/wrench.png',
      info: ['Лицензия', 'No SMP']
    }
  },

  forms: {
    register: 'Регистрация'
  },

  footer: {
    text: 'Организация не имеет никакого отношения к Mojang AB, не нарушает принципы EULA. Все права на игру принадлежат Mojang AB. Весь остальной контент принадлежит команде "Спектрум".',
    conditionOfUse: 'Условия пользования',
    contacts: 'Наши контакты',
    rules: 'Правила'
  },

  header: {
    main: 'Главная',
    lang: 'Язык',
    profile: 'Профиль',
    auth: 'Войти',
    theme: 'Тема'
  },

  conditionOfUse: {
    pageTitle: 'SpectruM - Условия пользования',
    definitions:
      'Пользователь, игрок – Физическое лицо использующее проект. Проект – Вся платформа, включая сайт, игровые сервера, лаунчер и т.п.',
    conditions: [
      [
        'Пользовательское соглашение',
        [
          'Данный документ является официальным регламентом проекта, любые прочие таковыми называться не могут.',
          'Цель данных правил – защита интересов пользователей и ресурса и установление порядка на всех ресурсах проекта.',
          'Любой человек имеет право посещать проект, если он не нарушает Правила проекта.',
          'Регистрируясь на проекте, вы соглашаетесь со всеми правилами данного списка, правами описанными ниже и обязанностями.',
          'Регистрируясь на проекте, вы соглашаетесь с обработкой Администрацией ваших персональных данных, то есть совершение, в том числе, следующих действий: обработку (включая сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, обезличивание, блокирование, уничтожение персональных данных).',
          'Право использования всех сервисов проекта, предоставляется Администрацией на бесплатной основе, за исключением дополнительных функций (приобретаемых на платной основе и активируемых путем активации дополнительных возможностей в серверной версии (плагины) игры), а так-же платных пропусков на платные сервера. Использование бесплатного функционала предоставляется в текущей форме, не гарантируя 100% правильность работы. Игровые вещи, способности и т.п, утерянные в связи с ненадлежащей работой неоплачиваемых сервисов, не возвращаются.',
          'Оплата дополнительных частей программного продукта производится только на официальном сайте проекта, находящимся по адресу spectrumine.com в валюте – российский рубль. Зачисление средств производится с помощью агрегатора платежей в любой валюте по месту нахождения пользователя, конвертируемой самим агрегатором в российские рубли.',
          'При вводе на сайте не верного ника администрация не отвечает за последствия покупки чего-либо на этот ник.',
          'Так как не всегда удается определить нарушение правил пользователем, окончательное решение остается за Администраторами проекта.',
          'Правообладателями дополнительных частей продукта являются их авторы. Использование этих частей Администрацией осуществляется на основе соглашения о свободном распространении и использовании.',
          'Незнание Правил не освобождает от ответственности.',
          'Проект никак не связан с компанией Mojang AB. Все права на игру принадлежат Mojang AB.',
          'Все деньги поступающие от игроков на сторону платформы являются безвозмездным пожертвованием на развитие сервиса и возврату не подлежат.'
        ]
      ],
      [
        'Права и обязанности игроков',
        [
          'Игрок имеет право использовать все доступные ему возможности, если они не нарушают Правила проекта.',
          'Игрок полностью отвечает за надежность своего пароля и доступа к аккаунту.',
          'Игрок имеет право на добровольное пожертвование.',
          'Игрок соглашается с тем, что потраченные им средства не будут возвращены.',
          'Игроки, имеющие различные привилегии на сервере, ничем не отличаются от обычных игроков, кроме дополнительных косметических возможностей и полностью подчиняются Правилам проекта а так-же EULA компании Mojang AB.',
          'Игрок обязан сообщать о выявленных багах и недоработках Администрации сервера, в случае намеренного скрытия выявленных багов и недоработок, Администрация имеет право заблокировать или полностью удалить аккаунт игрока.',
          'Любой игрок может пожаловаться на других игроков.',
          'Игрок имеет право подать жалобу на игрока/модератора'
        ]
      ],
      [
        'Права и обязанности Модерации (Персонал проекта)',
        [
          'Модератор является руководством проекта и включает в себя модерацию и поддержку.',
          'Модератор обязан соблюдать Настоящие Правила.',
          'Модератор обязан отвечать на устные вопросы игроков (кроме личных (помоги построить дом и т.д)) , а также следить за соблюдением Настоящих Правил.',
          'Модератор вправе выдавать наказание исходя из Настоящих Правил.',
          'При выдаче наказания, Модератор обязан указать причину и номер правила.',
          'Модерации запрещено выдавать наказание если его нет в правилах.',
          'Модератору запрещено выдавать себя за создателя, и разжигать рознь в сторону Администрации.',
          'Действия Модератора, направленные на возбуждение ненависти либо вражды, а также на унижение достоинства человека либо группы лиц по признакам пола, расы, национальности, языка, происхождения, ориентации, отношения к религии, а равно принадлежности к какой-либо социальной группе, совершенные публично, - наказывается снятием с поста.'
        ]
      ],
      [
        'Права и обязанности Администрации',
        [
          'Администрация проекта может в исключительных случаях может отклоняться от Настоящих Правил и действовать на свое усмотрение.',
          'Администрация не хранит пароли пользователей в открытом виде.',
          'Администрация не несет ответственности за аккаунты игроков, включая социальную инженерию, вирусы, подбор пароля и т.п..',
          'Решения Администрации обжалованию не подлежат.',
          'Администрация вправе выдавать любое наказание.',
          'Жалобы на Администрацию не принимаются.',
          'Все полученные Администрацией средства, являются добровольным пожертвованием и возврату не подлежат (п. 2.4).',
          'Администрация вправе забирать привилегии, и отказывать в обслуживании игрокам без объяснения причины.',
          'Администрация вправе изменять возможности игровых привилегий как в лучшую, так и в худшую сторону, без каких-либо уведомлений.',
          'Толкование правил сайта осуществляется только главными Администраторами. Любые другие попытки истолковать правила в пользу любой из сторон признаются некорректными.',
          'Администрация имеет право не объяснять причины блокировки аккаунтов.',
          'Администрация оставляет за собой право в одностороннем порядке изменять текущие правила с уведомлением пользователей посредством официального сообщества проекта, находящимся на ресурсе "ВКонтакте".',
          'Администрация ведет управление игровыми процессами и всем проектом - исключительно по своему усмотрению.',
          'Администрация оставляет за собой право проводить периодические обновления игрового мира и всех статистик (вайп). Вайп производятся Администрацией по истечении временного отрезка, далее которого нормальное функционирование сервисов невозможно, ввиду особенностей построения игрового процесса. Длительность вышеуказанного временного отрезка определяется администрацией самостоятельно, исходя из текущего положения дел. Вайп не является отказом пользователю в использовании платных дополнений, т.к при этом не происходит отзыв лицензии на часть программного продукта или ограничения функционала этой части.',
          'Администрация вправе держать свою личность в анонимности. Из-за этого имеют права не отвечать на ваши вопросы, которые не относятся к серверу.'
        ]
      ]
    ]
  },

  contacts: {
    pageTitle: 'SpectruM - Контакты',
    messengersTitle: 'Мессенджеры',
    messengers: [
      {
        name: 'Telegram - ',
        link: ' Наша группа',
        linkSrc: 'https://t.me/spectrumine',
        iconSrc: '/icons/telegram.svg'
      },
      {
        name: 'Discord - ',
        link: 'Наш канал',
        linkSrc: 'https://discord.gg/w2Ks8HFPDJ',
        iconSrc: '/icons/discord.svg'
      }
    ],
    emailsTitle: 'Почта',
    emails: [
      {
        email: 'spectruminesup@gmail.com ',
        description: ' - Поддержка'
      }
    ]
  },

  rules: {
    pageTitle: 'SpectruM - Правила',
    rules: [
      [
        'Общее',
        [
          'Играя на сервере SpectruMine вы тем самым соглашаетесь со всеми правилами, перечисленными ниже. В случае несогласия, игрок обязуется прекратить использование сервисов проекта.',
          'Незнание правил не освобождает вас от ответственности. Взлом вашего аккаунта не является оправданием, если вас обвиняют в нарушении правил.',
          'Администратор управляет проектом строго по своему усмотрению и вправе наказать игрока по причине, не указанной в правилах и без объяснения причин.',
          'Сервер является платным однако находится в стадии бета-тестирования что не гарантирует правильную его работу. ',
          'Так как не всегда возможно точно определить нарушение какого-либо пункта правил, окончательное решение остается за Администратором.',
          'Все изменения правил согласуются с Администратором и дополняются, если они не полны или не ясны. Правила могут быть изменены в любое время без оповещения игроков.',
          'Модератор на свое усмотрение может смягчить или увеличить наказание для игрока.',
          'Модератор – доверенные лица администрации, ответственные за поддержание порядка во всех сервисах SpectruMine вверенных им, соблюдающие настоящие Правила и Правила для Администрации серверов.' +
            ' Модераторы не трактуют правила буквально или же формально, в спорных вопросах руководствуются лишь целью созданных правил и соображениями здравого смысла. Каждая спорная ситуация, возникшая в Discord сервере или в игре, решается строго индивидуально.'
        ]
      ],
      [
        'Постройки',
        [
          'Запрещается строить постройки в виде нецензурных надписей, имеющие форму чего-либо непристойного, неприличных картинок, и символик направленых на унижене и оскобления кого либо.' +
            ' Наказание: снос строения.'
        ]
      ],
      [
        'Игровой мир',
        [
          'Запрещается нецензурная лексика, ложь, оскорбления, угрозы в игровом мире, провокации (на табличках, на информационных табло и т.д.).' +
            ' Наказание: снос постройки и бан на 1 день.'
        ]
      ],
      [
        'Гриферство',
        [
          'Гриферство в его обычном понимании ЗАПРЕЩЕНО. Вы можете уничтожать чужие постройки и грабить только в следующих ситуациях:',
          'Открытый и явный конфликт игроков, действующий в рамках РП.',
          'Открытый и явный конфликт кланов, приводящий к клановой войне, другим вооружённым конфликтам, действующих в рамках РП. ',
          'Запрещено заливать чужие дома/варпы нефтью/водой, засыпать песком/гравием. а также просто беспорядочно и бессмысленно разливать воду или лаву. ',
          'Запрещается убивать чужих животных (мирных), если они в загонах и не относятся к РП конфликту. ',
          'Запрещается выкачивать/добывать ресурсы с сундуков (и любых других блоков, хранящих ресурсы), принадлежащих другому игроку.',
          'Гриферство наказуемо: первый раз 7 дней бана, при рецидиве - вечный.'
        ]
      ],
      [
        'Общение в игровом чате',
        [
          'Основной язык чата – Русский, Белорусский и Английский. Общение на других языках в общем чате и транслит запрещен и наказуем, используйте ЛС. Наказание: мут на 10 мин при рецидиве - 1 час.',
          'Выдавать себя за Администрацию, постить в чате команды Модераторов/Администратора запрещено. Наказание: мут от 5 часов до 24 часов/бан на усмотрение Модератора.',
          'Категорически запрещается оскорблять других игроков/Администрацию. Относитесь уважительно к другим людям. Наказание: мут от 15 мин до 48 часов, в зависимости от тяжести высказывания.',
          'Запрещается упоминать (в оскорбительной/унизительной форме) родных. Наказание: мут от 15 минут до вечного.',
          'Запрещаются сообщения: унижающие человеческое достоинство, сексуального характера (действия сексуального характера), разжигающие межнациональную рознь, агрессивное обсуждение политики, угрозы расправой в реальной жизни, угрозы баном, дискриминация людей по религиозному или другим признакам, пропаганда/обсуждение нацизма, наркотиков, алкоголизма и табакокурения. Наказание: мут от 15 мин до 12 часов.',
          'Администрация не обязана исполнять желания игроков, например, смену времени суток, телепортацию к другому игроку, выдачу ресурсов/прав. Если зовете к себе на помощь, Вы обязательно должны указать причину для телепортации. Сообщения вида "модер тп плиз" "модер помоги!" расцениваются как Флуд и наказываются соответственно. За назойливость вы можете быть серьезно наказаны. Наказание: мут от 15 минут до 12 часов. При частых рецидивах мут до 24 часа.',
          'Флудить запрещено. Флудом считаются высказывания не имеющие смысловой нагрузки, а также повторяющиеся более трёх раз подряд сообщения. Повтор знаков (более 5 подряд) приравнивается к флуду. Наказание: мут от 15 минут до 12 часов. При частых рецидивах мут до 24 часа.',
          'Рекламу магазинов/услуг/желания приобрести/продать, можно давать только раз в 5 минут. Наказывается  по 5.8.',
          'Запрещен капс в сообщениях(за исключением аббревиатур и названий приборов в игре (таких как ЭХО, МФЭ и др.)). Капс — сообщение, состоящее целиком(или одно из слов сообщения) из ЗАГЛАВНЫХ букв или большого их количества. Наказание: мут от 15 минут до 6 часов.',
          'Запрещена дискриминация неопытных игроков, дезинформирование, насмешки, отправлять в чат провокационные сообщения, мешать общению других игроков. Наказание: мут на 3 часа, при рецидиве наказывается по 5.6.',
          'Разрешено размещать ссылки только на всем известные ресурсы, такие как vk.com, google.com, wikipedia и т.д. Все остальные URL следует отправлять только в личные сообщения определенному игроку. Наказание: мут на 3 часа, если же после перехода по вашей ссылке будет обнаружено вредоносное ПО, вирусы, фишинговые сайты вы будете наказаны по 6.1.',
          'Попытки завладеть чужим аккаунтом, выманивать логин/пароль наказуемы. Наказание: вечный бан.',
          'Запрещается подстрекательство третьих лиц на нарушение правил, подставлять игроков, говорить лживые сведения от любого игрока в третьем лице. Наказание: мут от 15 минут.',
          'Публичная критика/обсуждение действий Администратора или Администрации сервера запрещена. В игре Администрация может сначала выдать вам предупреждение о том, что вы нарушаете правило 5.14 и сообщить что вы получите мут, если будете продолжать обсуждение в игре, а не на форуме. Если игрок продолжит, то получит мут. Наказание: предупреждение, потом мут на 1 день.',
          'Публичная критика проекта/серверов запрещена. Наказание: мут от 1-го часа до вечного бана на всех серверах, в зависимости от тяжести высказывания.',
          'Пускать ложные сведения о вайпе запрещено. Наказание: мут на 3 часа.',
          'Запрещается размещение сообщений, нарушающих гос. законодательство (сбыт наркотиков, распространение ДП, планирование террористических актов, упоминание запрещенных в РФ организаций/движений и т.д.). Наказание: вечный мут.'
        ]
      ],
      [
        'Другое',
        [
          'Запрещена в (любой форме) реклама/скрытая реклама других проектов, использование/распространение/обсуждение/упоминание программ, вредоносного ПО, багов, дюпов, ошибок уязвимостей плагинов, игры, дающих преимущество над другими игроками - «читерство». Наказание: вечный бан.',
          'Запрещено писать в чате команды, используемые в читах. Наказание: мут на 1 день (рецидив - от 3 дней бана).',
          'Запрещено использование читов, дающих преимущество над другими игроками. Наказание: бан от 4 дней.',
          'Дестабилизировать работу, создавать лаги/лаго-зоны, вызывать падения сервера запрещено и наказуемо. Так же не желательна установка слишком большого количества приборов, механизмов Create, жителей огромных размеров и прочее (на усмотрение администрации). Наказание: бан от 1-го дня до вечного. Снос механизмов, создающих лаги.',
          'Запрещено создание аккаунтов для прогрузки чанков / используется в негативных целях (нарушающих правила проекта). Наказание: если для прогрузки чанков, то бан твина, который был использован. Если в негативных целях, то бан на основании нарушенного пункта из правил.',
          'Запрещается использование чужого аккаунта для входа в игру, даже с разрешения хозяина аккаунта, а также предоставление данных своего аккаунта другому игроку. Наказание: Предупреждение / бан 1-3 дня.',
          'Запрещается обманывать игроков и администрацию, вводить в заблуждение. Наказание: бан 5-10 дней/вечный.',
          'Игрок не имеет права мешать работе Администрации на сервере. Наказание: бан на 3 часа.',
          'Игрок не имеет права выдавать себя за администрацию или делать ники, похожие на ники Администраторов, Модераторов, Хелперов. Наказание: бан вечный.',
          'Запрещено пытаться обмануть систему блокировки вашего аккаунта, совершать обман системы блокировки вашего аккаунта. Наказание: бан по подсети навсегда.',
          'Игрок не имеет права продавать что-либо на серверах за реальную валюту. Разрешается только внутреигровые продажи и обмены в рамках одного сервера исключительно игровые ресурсы на игровые ресурсы. Запрещена любая продажа донат услуг в любом виде Наказание: бан вечный.',
          'Запрещается использовать аккаунты и вещи для коммерческих целей. Запрещено продавать, покупать или предлагать аккаунты и вещи в обмен на предметы в игре, валюту, аккаунты в других играх, сервисах или любые другие выгоды. Наказание: бан вечный. ',
          'Если игрок случайным образом выдал вам донат услугу или же подкинул - вы незамедлительно обязаны вернуть полученное администрации. Наказание: бан 5-10 дней, изъятие.',
          'Игрок не имеет права создавать помеху комфортной игровой деятельности других игроков. Наказание: бан от 3 часов'
        ]
      ],
      [
        'Правила и положение для Администрации проекта',
        [
          'Модератор является ДОБРОВОЛЬНЫМ помощником администрации проекта.',
          'Модераторы выбираются представителями администрации самостоятельно и обсуждению не подлежат.',
          'Модератор обязан соблюдать все вышеперечисленные правила и наказывать игроков только по причине с указанием нарушенного правила.',
          'Модераторы не несут какие-либо дополнительные обязательства перед игроками, кроме указанных выше, и имеют полное право отказать в помощи им.',
          'Модератор сервера не может наказывать или защищать игрока по личным причинам.',
          'Модератор сервера обязан разбираться в конфликтных ситуациях игроков.',
          'Модератор не поняв ситуации, должен обратиться к Администратору, чтобы тот помог.',
          'Модератор обязан всегда нести ответственность за то, что он делает на сервере.',
          'Модератор сервера не может кикать, банить, телепортировать игрока без серьезной причины.',
          'Модератор сервера всегда обязан следить за игровым процессом на сервере.',
          'Модератор не должен использовать полномочия в собственных целях.',
          'Модератор обязан нести добро во благо сервера.',
          'Модератор обязан быть грамотным, коммуникабельными активным.',
          'Модератор обязан соблюдать цензуру и речевые нормы при общении с игроками.',
          'Модератор может быть снят с должности в любой момент, без предупреждения.',
          'Модератор обязан всегда отзываться на сообщения Администраторов и соблюдать все порученные им указания, не нарушающие норм сервера.',
          'Модератор обязан сообщить о злоумышлении или заговоре кого-либо из персонала или игроков главному Администратору сервера.'
        ]
      ]
    ]
  },

  activateChangePass: {
    pageTitle: 'SpectruM - Подтверждение смены пароля',
    passwordChanged: 'Пароль изменён',
    error: 'Не удалось изменить пароль',
    logOutFromAllDevices: 'Выйти со всех устройств',
    changePass: 'Изменить пароль',
    toMain: 'На главную'
  },

  activateRegisterCode: {
    pageTitle: 'SpectruM - Подтверждение регистрации',
    loadTip: 'Подтверждение регистрации'
  },

  hardcoreServer: {
    pageTitle: 'SpectruM - Hardcore сервер',
    ipAddress: 'IP Адрес',
    points: [
      {
        icon: '/icons/server.svg',
        title: 'О сервере',
        description:
          'Ванильный геймплей, минимальное количество плагинов. Только хардкор! Платите за свою смерть временем потраченным на сервере.'
      },

      {
        icon: '/icons/headphones.svg',
        title: 'Голосовой чат',
        description:
          'На сервере присутствует плагин PlasmoVoice для голосового общения внутри игры. После установки на свой клиент вы сможете беспрепятственно общаться с помощью микрофона.'
      },

      {
        icon: '/icons/gears.svg',
        title: 'Как работает?',
        description:
          'Мы сделали плагин, который даёт возможность возродиться спустя время, которое вы провели на сервере, т.к. умереть навсегда было бы слишком сложно.'
      },

      {
        icon: '/icons/discord.svg',
        title: 'Сообщество',
        description:
          'Дружелюбное комьюнити. Discord сервер и другие плюшки. Регистрируйтесь и заходите на сервер!'
      }
    ]
  },

  notFound: {
    pageTitle: 'SpectruM - 404',
    text(path) {
      return `Страница ${path} не найдена`
    }
  },

  profile: {
    pageTitle: 'SpectruM - Профиль',
    needAuth: 'Вы не авторизованы',
    auth: 'Войти',
    changePass: 'Изменить пароль',
    logOut: 'Выйти',
    logOutFromAllDevices: 'Выйти со всех устройств'
  },

  userHardcoreStatistics: {
    pageTitle: 'SpectrumM - Статистика'
  },

  auth: {
    pageTitle: 'SpectruM - Авторизация'
  },

  main: {
    pageTitle: 'SpectruM - Сервера Minecraft'
  }
}
export default ru
