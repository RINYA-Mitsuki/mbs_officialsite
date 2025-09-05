'use strict';
{
  // 上から新しい順で並べる
  const works = [
    {
      title: "Rain Rain For All: MV制作",
      date: '20250902',
      tags: ['Other'], // Music, Design, 3D, Other
      description: '2025年の夏から秋にかけて開催のBMSのイベント「BOF21」に出場した楽曲の<a class="modal__description--reference" href="https://w.atwiki.jp/laser_bm/pages/69.html#id_b71b16a5" target="_blank">BGA</a>として制作。<a class="modal__description--reference" href="https://w.atwiki.jp/laser_bm/pages/69.html#id_b71b16a5" target="_blank">春雨</a>氏の可愛いイラストと併せ、日常というキャンバスに雨という絵の具で淡い彩りを乗せていくようなイメージを込めた。<br>制作期間は1ヶ月程度。使用ツールはAfter Effects、Blender、及びMidjourney。',
      thumbnail: 'img/works/works_other_rainrain.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: 'IvSYEjDP5pA', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1962806666682138831',
        },
        {
          tag: 'youtube',
          url: 'https://youtu.be/IvSYEjDP5pA?si=kh7xNWRjDw12N5K5',
        },
      ],
    },
    {
      title: "Quiet Luxe: VRChat想定アセット",
      date: '20250801',
      tags: ['3D'], // Music, Design, 3D, Other
      description: 'VRChatのワールド用としてBOOTHにて販売する目的で個人的に制作。こぢんまりとしつつ温かみと高級感を両立させた地下空間で、曲木細工をテーマとした家具やオブジェを多数取り揃えている。<br>制作期間は総合で1ヶ月程度。使用ツールはBlender、Substance 3D Painter、Unity。',
      thumbnail: 'img/works/works_3d_quietluxe.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1953669323278758313',
        },
        {
          tag: 'shop',
          url: 'https://rinya-p.booth.pm/items/7243479',
        },
        {
          tag: 'other',
          url: 'https://vrchat.com/home/world/wrld_6667907a-f335-4de2-9195-45d3768d123c/info',
        },
      ],
    },
    {
      title: "Via Memoriae: COEGTS2025 合作描き下ろし楽曲",
      date: '20250721',
      tags: ['Music'], // Music, Design, 3D, Other
      description: '音楽ゲームosu!taikoの大会COEGTS2025にて予選課題曲の1つとして、<a class="modal__description--reference" href="https://x.com/Part_Lerts" target="_blank">ptar124</a>さんと<a class="modal__description--reference" href="https://x.com/MediumKuroooo" target="_blank">Medium</a>とボクの3人で制作。表で鳴っているリードギターや歪んだリズムギターの一部を主に担当。すべて打ち込みでありながらチョーキングやハーモニクス等の様々な奏法を取り入れ、実物のギターを実際に弾いているかのような調整を多数取り入れた。<br>制作期間はボク個人の実働時間的には総合で1週間程度、使用ツールはCubase。',
      thumbnail: 'img/works/works_music_viamemoriae.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: 'tFLRlvuc0po', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/staff_gts/status/1946989200626090205',
        },
        {
          tag: 'youtube',
          url: 'https://youtu.be/1tq_pK80ypg?si=tC3pAV7iA89z5DOH',
        },
        {
          tag: 'soundcloud',
          url: 'https://soundcloud.com/part-lerts/via-memoriae',
        },
      ],
    },
    {
      title: "VTuber魔王チロルニア様: イベント用3D空間制作",
      date: '20250628',
      tags: ['3D'], // Music, Design, 3D, Other
      description: 'VTuberの<a class="modal__description--reference" href="https://x.com/devil_chiroru_v" target="_blank">魔王チロルニア</a>様から依頼をいただき制作。テーマカラーの水色を全面にあしらったメイド喫茶をイメージした空間で、魔王にふさわしい黄金の玉座がステージ上に鎮座している。<br>制作期間は総合で1ヶ月程度。使用ツールはBlender、Substance 3D Painter、Unity。',
      thumbnail: 'img/works/works_3d_chirolnia.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1939190113713758510',
        },
        {
          tag: 'other',
          url: 'https://vrchat.com/home/world/wrld_69ad885e-effd-42a9-8bc7-af14af00577d/info',
        },
      ],
    },
    {
      title: "Mitsuboshi_Studio: Webサイト制作",
      date: '20250407',
      tags: ['Design', 'Other'], // Music, Design, 3D, Other
      description: '当サイトである。Wedデザインスクールの卒業制作として制作。ウィンドウの中にまた新たな端末があるようなデザインを採用し、「枠」をテーマとして型に囚われない動きを目指した。<br>制作期間は一ヶ月程度、使用ツールはFigma、VS Code、使用言語はHTML、CSS、Javascript。',
      thumbnail: 'img/works/works_other_mypage.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'other',
          url: 'https://mitsuboshi.studio/',
        },
      ],
    },
    {
      title: "VRC撃剣部: VRChatグループロゴデザイン",
      date: '20250407',
      tags: ['Design'], // Music, Design, 3D, Other
      description: 'VRChat内にて有志のユーザーが行っているイベントのロゴとして依頼され制作。エンブレムには漢字の「撃」を刀の鍔に見立て、タイポグラフィ部分は和風のフォントを一刀両断したようなデザインで激しさを表現。<br>制作期間は一週間程度、使用ツールはIllustrator。',
      thumbnail: 'img/works/works_design_gekikenbu.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/Noih/status/1909069786300228035',
        },
      ],
    },
    {
      title: "Siegfried: EGTS2025 描き下ろし楽曲",
      date: '20250310',
      tags: ['Music'], // Music, Design, 3D, Other
      description: '音楽ゲームosu!taikoの大会EGTS2025にて課題曲の1つとして制作。BPM270という圧倒的なスピードと激しいメタルギター、更には現実では再現不可能な怒涛のドラムで、神話上の人物であるジークフリートの激しい戦いを表現。<br>制作期間は3週間程度、使用ツールはCubase。',
      thumbnail: 'img/works/works_music_siegfried.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: 'nWo23Jhb8n4', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/staff_gts/status/1898765664841601300',
        },
        {
          tag: 'youtube',
          url: 'https://youtu.be/nWo23Jhb8n4?si=FC6M8Z3GdK9VJrMX',
        },
        {
          tag: 'soundcloud',
          url: 'https://soundcloud.com/rinya-p/siegfried',
        },
      ],
    },
    {
      title: "DJなんもわからん&PSY-APPLE: DJイベントフライヤー制作",
      date: '20250215',
      tags: ['Design'], // Music, Design, 3D, Other
      description: '2025年2月に渋谷のCIRCUS Tokyoにて行われたDJイベントのフライヤーとして制作。イベントのタイトルからパイナップルのモチーフをAI生成し、ダークかつサイバーなデザインで仕上げた。<br>制作期間は総合で1週間程度。使用ツールはPhotoshop及びMidjourney。',
      thumbnail: 'img/works/works_design_nanwaka2.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1879744631392612374',
        },
      ],
    },
    {
      title: "Clover's Retreat: VRChat想定アセット",
      date: '20250201',
      tags: ['3D'], // Music, Design, 3D, Other
      description: 'VRChatのワールド用としてBOOTHにて販売する目的で個人的に制作。四つ葉のクローバーをモチーフとした地下空間で、それぞれ雰囲気が異なる四方の部屋があり、用途によって使い分けが可能。<br>制作期間は総合で1ヶ月程度。使用ツールはBlender、Substance 3D Painter、Unity。',
      thumbnail: 'img/works/works_3d_clovers.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1885510087554564488',
        },
        {
          tag: 'shop',
          url: 'https://rinya-p.booth.pm/items/6520689',
        },
        {
          tag: 'other',
          url: 'https://vrchat.com/home/world/wrld_b9b3b691-6328-4626-a093-e9bc5209ca47/info',
        },
      ],
    },
    {
      title: "自分用名刺デザイン",
      date: '20250101',
      tags: ['Design'], // Music, Design, 3D, Other
      description: '自分で使用する名刺として制作。個人的に好きな色である緑の台紙に、文字やその他の要素は全て白顔料の箔押し想定でシンプルなデザインとした。<br>制作期間は2日。使用ツールはIllustrator。印刷は個人的にお気に入りの<a class="modal__description--reference" href="https://haku-asadaya.com/" target="_blank">あさだ屋</a>さんに依頼。',
      thumbnail: 'img/works/works_design_namecardMy.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
      ],
    },
    {
      title: "パラリアルラスベガス: バーチャルマーケット2024Winter BGM",
      date: '20241207',
      tags: ['Music'], // Music, Design, 3D, Other
      description: '2024年12月開催の「バーチャルマーケット2024Winter」にて、会場BGMの1つとして制作。ビッグバンドのような楽器構成かつ、全く別の雰囲気を持つ様々な音色を混ぜ合わせ、メタバースのダイバーシティ感を表現。<br>制作期間は2週間程度、使用ツールはCubase。',
      thumbnail: 'img/works/works_music_pararealLasVegas.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: 'Ed17eDbKLKw', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1862444628466880938',
        },
        {
          tag: 'youtube',
          url: 'https://www.youtube.com/watch?v=Ed17eDbKLKw',
        },
        {
          tag: 'other',
          url: 'https://event.vket.com/2024Winter/world/4',
        },
      ],
    },
    {
      title: "DJなんもわからん&PSY_APPLE feat.火ド部: DJイベントフライヤー制作",
      date: '20241102',
      tags: ['Design'], // Music, Design, 3D, Other
      description: '2024年11月に渋谷のCIRCUS Tokyoにて行われたDJイベントのフライヤーとして制作。イベントのタイトルからパイナップルのモチーフをAI生成し、果物としての瑞々しさとサイケデリック感をいい感じに融合させた。<br>制作期間は総合で1週間程度。使用ツールはPhotoshop及びMidjourney。',
      thumbnail: 'img/works/works_design_nanwaka1.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1832936587870732640',
        },
      ],
    },
    {
      title: "Burning×Warning: MV制作",
      date: '20241013',
      tags: ['Other'], // Music, Design, 3D, Other
      description: '2024年10月開催のBMSのイベント「BOF:TT」に出場した楽曲の<a class="modal__description--reference" href="https://w.atwiki.jp/laser_bm/pages/69.html#id_b71b16a5" target="_blank">BGA</a>として制作。楽しげでハツラツとした曲調に合わせたアニメーションの中で、歌詞に含まれた切なさをいい塩梅で表現。<br>制作期間は2週間程度。使用ツールはAfter Effects及びMidjourney。',
      thumbnail: 'img/works/works_other_burning.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: 'flesyxpz-kw', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1845447985997676571',
        },
        {
          tag: 'youtube',
          url: 'https://youtu.be/flesyxpz-kw?si=G3EoDcByQyBnxAFP',
        },
      ],
    },
    {
      title: "九龍帝国城下町 捌番街 Code Silent: バーチャルマーケット2024Summer BGM",
      date: '20240720',
      tags: ['Music'], // Music, Design, 3D, Other
      description: '2024年7月開催の「バーチャルマーケット2024Summer」にて、会場BGMの1つとして制作。怪しい研究を行う工場への潜入というテーマを元に、Industrial Bassという楽曲ジャンルと中華風の音色にて工業感や蠢く陰謀を表現。<br>制作期間は2週間程度。使用ツールはCubase。',
      thumbnail: 'img/works/works_music_kowloonSilent.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: 'ZAu3Kjs5Iyg', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1814496829851291848',
        },
        {
          tag: 'youtube',
          url: 'https://youtu.be/ZAu3Kjs5Iyg?si=4v7mtUA0oLblkSi_',
        },
        {
          tag: 'other',
          url: 'https://event.vket.com/2024Summer/world/17',
        },
      ],
    },
    {
      title: "SereneHaven: VRChat想定アセット",
      date: '20240702',
      tags: ['3D'], // Music, Design, 3D, Other
      description: 'VRChatのワールド用としてBOOTHにて販売する目的で個人的に制作。開放感全振りの広々とした別荘をテーマに、壁一面を全て窓ガラスにする他、Barや個室も作成して幅広い用途に対応できるような空間にデザイン。<br>制作期間は総合で2ヶ月程度。使用ツールはBlender、Substance 3D Painter、Unity。',
      thumbnail: 'img/works/works_3d_serene.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1808072076307161140',
        },
        {
          tag: 'shop',
          url: 'https://rinya-p.booth.pm/items/5877373',
        },
        {
          tag: 'other',
          url: 'https://vrchat.com/home/world/wrld_5cdf61f8-733d-410c-a5e9-7b19056ee689/info',
        },
      ],
    },
    {
      title: "Neotopia Sounds: 同人音楽レーベルロゴデザイン",
      date: '20240420',
      tags: ['Design'], // Music, Design, 3D, Other
      description: '同人音楽レーベル「Neotopia Sounds」の主催である<a class="modal__description--reference" href="https://x.com/Sanotch_jp" target="_blank">Sanotch氏</a>から依頼を受けて制作。新しい音の理想郷という意味が込められた造語「Neotopia」の旅路を、方位磁針をテーマに未来感を混ぜ合わせながら表現。<br>制作期間は一週間程度。使用ツールはIllustrator。',
      thumbnail: 'img/works/works_design_neotopia.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1781650025963196488',
        },
      ],
    },
    {
      title: "鳴る心: 音楽ユニット「天降」2nd Single",
      date: '20231224',
      tags: ['Music'], // Music, Design, 3D, Other
      description: '音楽ユニット「天降」での2nd Single。音楽という音のメッセージをいつまでもどこまでも奏で続け、何かを訴えかけ続けていきたいという願いを込めて制作。<br>制作期間は大体2ヶ月程度。使用ツールはCubase。',
      thumbnail: 'img/works/works_music_narukokoro.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: 'bp0WTuj6okY', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/amaori_official/status/1738879266606235872',
        },
        {
          tag: 'youtube',
          url: 'https://www.youtube.com/watch?v=bp0WTuj6okY',
        },
        {
          tag: 'soundcloud',
          url: 'https://soundcloud.com/amaori-official/narukokoro',
        },
      ],
    },
    {
      title: "知り合いの個人用名刺デザイン",
      date: '20230905',
      tags: ['Design'], // Music, Design, 3D, Other
      description: 'VRChat上の知り合いから依頼を受けて作成。依頼者がVRChat上で使用しているアバターが様々な図形の中を楽しそうに歩いている様子を名刺という形に上手く落とし込んだ。<br>制作期間は一週間程度。使用ツールはIllustrator。',
      thumbnail: 'img/works/works_design_namecardLemon.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1697061325892129076',
        },
      ],
    },
    {
      title: "知り合いの個人用名刺デザイン",
      date: '20230831',
      tags: ['Design'], // Music, Design, 3D, Other
      description: 'VRChat上の知り合いから依頼を受けて作成。テーマをLinux及びコードエディタとし、名刺に必要な情報の記載をC++の関数定義の記述で表現。その他のデザインは実際に存在するLinuxのテーマ（<a class="modal__description--reference" href="https://store.kde.org/p/1294174" target="_blank">Sweet KDE</a>）がモチーフ<br>制作期間は3日程度。使用ツールはIllustrator。',
      thumbnail: 'img/works/works_design_namecardEcto.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1697061325892129076',
        },
      ],
    },
    {
      title: "聞きたかねぇよ feat.初音ミク: オリジナル楽曲",
      date: '20230405',
      tags: ['Music', 'Other'], // Music, Design, 3D, Other
      description: 'テーマは「夢を追い続ける事を諦められない大人」、つまり自分自身である。ギターとピアノに少しのパーカッションだけの単調な構成にぶっきらぼうな内容の歌詞を乗せて、己の静かな叫びを表現。イラストは知り合いに依頼し、映像は自ら制作した。<br>制作期間は総合で3週間程度。使用ツールはそれぞれ、楽曲はCubase、映像はAfter Effects、Illustrator。',
      thumbnail: 'img/works/works_music_kikitakaneeyo.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '-3hC9w1fRgo', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1643569479761399809',
        },
        {
          tag: 'youtube',
          url: 'https://youtu.be/-3hC9w1fRgo',
        },
        {
          tag: 'soundcloud',
          url: 'https://soundcloud.com/rinya-p/kikitakaneeyo',
        },
      ],
    },
    {
      title: "Villa in Backcountry: VRChat想定アセット",
      date: '20221217',
      tags: ['3D'], // Music, Design, 3D, Other
      description: 'VRChatのワールド用としてBOOTHにて販売する目的で個人的に制作。3階建てであり、最上階が玄関で、最下層が水没している斬新なデザインを採用。別荘やコテージのような雰囲気に重きを置いた。<br>制作期間は総合で3ヶ月程度。使用ツールはBlender、Substance 3D Painter、Unity。',
      thumbnail: 'img/works/works_3d_backcountry.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1594651244919783424',
        },
        {
          tag: 'shop',
          url: 'https://rinya-p.booth.pm/items/4389500',
        },
        {
          tag: 'other',
          url: 'https://vrchat.com/home/world/wrld_fee1c2ec-c5be-4ac4-b47d-3d2bf9836f0e/info',
        },
      ],
    },
    {
      title: "知り合いの個人用名刺デザイン",
      date: '20221207',
      tags: ['Design'], // Music, Design, 3D, Other
      description: 'VRChat上の知り合いから依頼を受けて作成。依頼者VRChat上でDJとして活動していることから、DJ用の機材とアバターによく付けているアクセサリーの3Dモデルを画像としてレンダリングし、加工を施したものを使用している。<br>制作期間は総合で2週間程度。使用ツールはPhotoshop、Illustrator、Unity。',
      thumbnail: 'img/works/works_design_namecardRcXvr.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
      ],
    },
    {
      title: "ネムタインストア: 3Dアバター用アパレルロゴデザイン",
      date: '20220810',
      tags: ['Design'], // Music, Design, 3D, Other
      description: 'VRChat等で使用可能なアバター用アパレルを制作する「ネムタインストア」のオーナーである<a class="modal__description--reference" href="https://x.com/nemutain333" target="_blank">ネムタイン氏</a>から依頼を受けて制作。名前から羊をテーマとし、丸を多用してポップな印象を全面に引き出せるようにデザイン。<br>制作期間は1週間程度。使用ツールはIllustrator。',
      thumbnail: 'img/works/works_design_nemutain.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1557203909466157058',
        },
      ],
    },
    {
      title: "Comfortable Base: VRChat想定アセット",
      date: '20220723',
      tags: ['3D'], // Music, Design, 3D, Other
      description: 'VRChatのワールド用としてBOOTHにて販売する目的で個人的に制作。秘密基地のような地下アジトをテーマとし、長い階段を下るワクワク感や、その先に広がる非日常的な狭い空間への憧れを意識した。<br>制作期間は総合で1ヶ月程度。使用ツールはBlender、Substance 3D Painter、Unity。',
      thumbnail: 'img/works/works_3d_comfortable.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1547530872462647297',
        },
        {
          tag: 'shop',
          url: 'https://rinya-p.booth.pm/items/4013271',
        },
        {
          tag: 'other',
          url: 'https://vrchat.com/home/world/wrld_3c9d47b0-ee4a-4263-be7d-7ce89e88e2f9/info',
        },
      ],
    },
    {
      title: "Our Hideout: VRChat想定アセット",
      date: '20220627',
      tags: ['3D'], // Music, Design, 3D, Other
      description: 'VRChatのワールド用としてBOOTHにて販売する目的で個人的に制作。高級感のある秘密基地をイメージとし、少人数で静かに過ごせるような温かみと程よい狭さを意識して制作した。<br>制作期間は総合で1ヶ月程度。使用ツールはBlender、Substance 3D Painter、Unity。',
      thumbnail: 'img/works/works_3d_hideout.jpg',
      videoValue: 0, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1541255782179561472',
        },
        {
          tag: 'shop',
          url: 'https://rinya-p.booth.pm/items/3964112',
        },
        {
          tag: 'other',
          url: 'https://vrchat.com/home/world/wrld_927ea13a-245b-4c48-89ea-ed0e6f3b0461/info',
        },
      ],
    },
    {
      title: "存在証明: 音楽ユニット「天降」1st Single",
      date: '20220212',
      tags: ['Music'], // Music, Design, 3D, Other
      description: 'ボーカルに<a class="modal__description--reference" href="https://x.com/amatuki_VRChat" target="_blank">雨月れん氏</a>と<a class="modal__description--reference" href="https://x.com/salbam3" target="_blank">オズワルド氏</a>を迎えた音楽ユニット「天降」の1st Single。己の存在を世の中に訴えかけていくような攻撃的な歌詞と曲調が特徴の楽曲になっている。<br>制作期間は大体1ヶ月程度。使用ツールはCubase。',
      thumbnail: 'img/works/works_music_sonzaisyomei.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: 'NukEYFTOza8', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/amaori_official/status/1492455500369170433',
        },
        {
          tag: 'youtube',
          url: 'https://www.youtube.com/watch?v=NukEYFTOza8',
        },
        {
          tag: 'soundcloud',
          url: 'https://soundcloud.com/amaori-official/sonzaishomei',
        },
      ],
    },
    {
      title: "Gochamaze Diversity: BOFXVII出場作品",
      date: '20211009',
      tags: ['Music', 'Other'], // Music, Design, 3D, Other
      description: '2021年10月に開催されたBMSのイベント「BOF XVII」に出場するための楽曲と<a class="modal__description--reference" href="https://w.atwiki.jp/laser_bm/pages/69.html#id_b71b16a5" target="_blank">BGA</a>を制作。メタバースをテーマとし、そこに存在する無数の多様性をあらゆる方向あらゆるジャンルで表現。<br>制作期間は総合で1ヶ月半程度。使用ツールはそれぞれ、楽曲はCubase、映像はAfter Effects、Illustrator、Unity。',
      thumbnail: 'img/works/works_music_gochamaze.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: '46UtfP8hISw', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'x',
          url: 'https://x.com/RINYA_P/status/1446810208781565961',
        },
        {
          tag: 'youtube',
          url: 'https://youtu.be/46UtfP8hISw?si=z5vbYHkp_UBmzlEZ',
        },
        {
          tag: 'soundcloud',
          url: 'https://soundcloud.com/rinya-p/gochamaze-diversity',
        },
      ],
    },
    {
      title: "Invitation to the Mirage: VRChat内イベント宣伝用楽曲",
      date: '20201015',
      tags: ['Music', 'Other'], // Music, Design, 3D, Other
      description: 'VRChat内BAR風イベントの宣伝用に制作。ダークでディープな雰囲気に高級感を併せ持つような雰囲気に合わせ、映像も自ら撮影し制作。（イベント自体は今現在は行っていません。）<br>制作期間は総合で一週間程度。使用ツールはそれぞれ、楽曲はCubase、映像はAfter Effects、撮影はVRChat内。',
      thumbnail: 'img/works/works_music_mirage.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: 'Z4qw1aMXGkY', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'youtube',
          url: 'https://youtu.be/Z4qw1aMXGkY',
        },
      ],
    },
    {
      title: "Inner Emotions: VRChatアニメーションライブ用楽曲",
      date: '20201218',
      tags: ['Music', 'Other'], // Music, Design, 3D, Other
      description: '当時のVRChat文化の一つである「パリピ砲」という演出からインスピレーションを受けて作成。図太くてド派手なビームを発射するためだけに制作したため、様々なタイプの頭が悪くなりそうなキックを多用して勢いで突っ走る楽曲となっている。<br>制作期間は総合で2週間程度。使用ツールはそれぞれ、楽曲はCubase、アニメーションライブはUnity。',
      thumbnail: 'img/works/works_music_innerEmotions.jpg',
      videoValue: 1, // 0: thumbnail流用 1: YouTube動画埋め込み
      video: 'LtwQYE_qnls', // YouTube動画ID（watch?v=の後ろ）
      links: [ // x, youtube, soundcloud, shop, other
        {
          tag: 'youtube',
          url: 'https://youtu.be/LtwQYE_qnls',
        },
        {
          tag: 'soundcloud',
          url: 'https://soundcloud.com/rinya-p/inner-emotions',
        },
        {
          tag: 'other',
          url: 'https://vrchat.com/home/world/wrld_68f8bd17-445c-47bd-882f-dc500cfed382',
        },
      ],
    },
  ];

  let players = {};
  let videoIds = [];

  function addWorksItem (works) {
    // 個別番号
    let worksItemNumber = 0;
    $.each(works, function(index, work) {
      // タグを取得してクラス名を作成
      const tagsClass = work.tags.
      map(tag => `tag__${tag.toLowerCase()}`).join(' ');
      // タグを取得して文字表示用HTMLを作成
      const tagsHtml = work.tags.
      map(tag => `<p class="works__item--tag">${`:: ` + tag}</p>`).join('');
      // 動画かサムネイルかを判定してHTMLを作成
      const videoHtml = work.videoValue === 1 ?
      `<div id="yt-${work.video}" class="youtube-player" data-video-id="${work.video}"></div>` :
      `<img class="modal__box--thumbnail" src="${work.thumbnail}" alt="">`;
      // 制作日とジャンルを取得してHTMLを作成
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = monthNames[parseInt(work.date.slice(4, 6), 10) - 1];
      const subInfoHtml = `${work.date.slice(0, 4)} ${month} - ${work.tags.map(subTag => ` ${subTag}`).join(',')}`;
      // リンクを取得してアイコンリストHTMLを作成
      const linksHtml = work.links.
      map(link => `<a class="modal__box--link" href="${link.url}" target="_blank"><img class="modal__box--linkIcon" src="img/icon_${link.tag}.svg" alt="${link.tag}"></a>`).join('');
      // 上記を統合したHTMLを作成
      const itemHtml = `
        <li class="works__item works__itemNumber--${worksItemNumber} ${tagsClass}">
          <div class="works__item--box">
            <img class="works__item--thumbnail" src="${work.thumbnail}" alt="">
            <p class="works__item--title">${work.title}</p>
            <div class="works__item--overlay">
              <div class="works__item--overlayBg"></div>
              <div class="works__item--tagBox">
                ${tagsHtml}
              </div>
            </div>
            <div class="parentheses parentheses--1"></div>
            <div class="parentheses parentheses--2"></div>
            <div class="parentheses parentheses--3"></div>
            <div class="parentheses parentheses--4"></div>
          </div>
        </li>
      `;
      const modalHtml = `
        <div class="modal__container works__itemNumber--${worksItemNumber}">
          <div class="modal__box">
            <div class="modal__box--img">
              ${videoHtml}
            </div>
            <div class="modal__box--text">
              <p class="modal__box--title">${work.title}</p>
              <p class="modal__box--description">
                ${work.description}
              </p>
              <div class="modal__box--links">
                ${linksHtml}
              </div>
              <p class="modal__box--subInfo">
                ${subInfoHtml}
              </p>
              <div class="parentheses parentheses--1"></div>
              <div class="parentheses parentheses--2"></div>
              <div class="parentheses parentheses--3"></div>
              <div class="parentheses parentheses--4"></div>
            </div>
          </div>
          <div class="close__nav">
            <div class="close__slashBox">
              <div class="close__slash close__slash--1"></div>
              <div class="close__slash close__slash--2"></div>
            </div>
            <div class="parentheses parentheses--1"></div>
            <div class="parentheses parentheses--2"></div>
            <div class="parentheses parentheses--3"></div>
            <div class="parentheses parentheses--4"></div>
          </div>
        </div>
      `
      // 各table内に要素を追加
      $('.works__table').append(itemHtml);
      $('.modal__table').append(modalHtml);

      if (work.videoValue === 1 && work.video) {
      videoIds.push(work.video);
      }

      worksItemNumber += 1;
    });
    // works__tableの最後にTumblrへのリンクを追加
    const tumblrHtml = `
      <li class="works__item works__itemNumber--xxx tag__music tag__design tag__3d tag__other">
        <a href="https://mitsuki-hotta.tumblr.com/" target="_blank">
          <div class="works__item--box">
            <div class="works__item--past">
              <p class="works__item--pastText">更に過去の作品集<br>Tumblrへ</p>
            </div>
            <p class="works__item--title">過去作品集: Tumblr(外部サイト)へ</p>
            <div class="works__item--overlay">
              <div class="works__item--overlayBg"></div>
            </div>
            <div class="parentheses parentheses--1"></div>
            <div class="parentheses parentheses--2"></div>
            <div class="parentheses parentheses--3"></div>
            <div class="parentheses parentheses--4"></div>
          </div>
        </a>
      </li>
    `
    $('.works__table').append(tumblrHtml);
  }

  $(function(){
    console.log('works.js loading...');
    addWorksItem(works);
    console.log('works.js loaded');
  });

  // IFrame Player API関連
  // IFrame APIを動的に読み込む
  const ytApiTag = document.createElement('script');
  ytApiTag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(ytApiTag, firstScriptTag);

  // YouTube IFrame APIのプレイヤー生成
  window.onYouTubeIframeAPIReady = function() {
    console.log('YouTube IFrame API ready');
    videoIds.forEach(videoId => {
      const elementId = `yt-${videoId}`;
      const $el = $('#' + elementId);
      if ($el.length) {
        players[videoId] = new YT.Player(elementId, {
          videoId: videoId,
          height: '100%',
          width: '100%',
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
          }
        });
      } else {
        console.warn(`Element #${elementId} not found when trying to create player.`);
      }
    });
  }

  //動画の停止用関数
  window.stopAllVideos = function() {
    for (const videoId in players) {
      // プレイヤーが再生中かどうかを確認
      if (players[videoId].getPlayerState && players[videoId].getPlayerState() === YT.PlayerState.PLAYING) {
        // 再生中なら動画を停止
        players[videoId].seekTo(0, true);
        players[videoId].pauseVideo();
        console.log(`この動画の再生状況をリセットしました: ${videoId}`);
      }
    }
  }
}