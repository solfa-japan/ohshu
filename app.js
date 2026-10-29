/**
 * OhShu (王・主) 公式紹介ページ スクリプト
 * Interactive Game Demo, Audio Synth, Particle Canvas, Scripture Explorer
 */

// 50問のみことば・漢字データ
const OHSHU_QUESTIONS = [
  {
    "id": "1",
    "title": "王の王、主の主",
    "correctKanji": "主",
    "wrongKanji": "王",
    "scripture": "テモテヘの第一の手紙 6:15-16",
    "note": "時がくれば、祝福に満ちた、ただひとりの力あるかた、もろもろの王の王、もろもろの主の主が、キリストを出現させて下さるであろう。 神はただひとり不死を保ち、近づきがたい光の中に住み、人間の中でだれも見た者がなく、見ることもできないかたである。ほまれと永遠の支配とが、神にあるように、アァメン。"
  },
  {
    "id": "2",
    "title": "狭き門",
    "correctKanji": "門",
    "wrongKanji": "問",
    "scripture": "マタイによる福音書 7:13-14",
    "note": "狭い門からはいれ。滅びにいたる門は大きく、その道は広い。そして、そこからはいって行く者が多い。命にいたる門は狭く、その道は細い。そして、それを見いだす者が少ない。"
  },
  {
    "id": "3",
    "title": "わたしは道であり、真理であり、命である。",
    "correctKanji": "道",
    "wrongKanji": "通",
    "scripture": "ヨハネによる福音書 14:6",
    "note": "イエスは彼に言われた、「わたしは道であり、真理であり、命である。だれでもわたしによらないでは、父のみもとに行くことはできない。"
  },
  {
    "id": "4",
    "title": "愛は寛容",
    "correctKanji": "愛",
    "wrongKanji": "受",
    "scripture": "コリント13:4～8",
    "note": "愛は寛容であり、愛は情深い。また、ねたむことをしない。愛は高ぶらない、誇らない。不作法をしない、自分の利益を求めない、いらだたない、恨みをいだかない。不義を喜ばないで真理を喜ぶ。そして、すべてを忍び、すべてを信じ、すべてを望み、すべてを耐える。愛はいつまでも絶えることがない。"
  },
  {
    "id": "5",
    "title": "だから、目をさましていなさい。",
    "correctKanji": "目",
    "wrongKanji": "日",
    "scripture": "マタイによる福音書 25:13",
    "note": "だから、目をさましていなさい。その日その時が、あなたがたにはわからないからである。"
  },
  {
    "id": "6",
    "title": "畑に隠された宝",
    "correctKanji": "宝",
    "wrongKanji": "畑",
    "scripture": "マタイ 13:44",
    "note": "天の国は畑に隠されている宝に似ている。それを見つけた人はそのまま隠しておき、喜びのあまり、持ち物をことごとく売り払い、その畑を買う。"
  },
  {
    "id": "7",
    "title": "心をつくし、精神をつくして",
    "correctKanji": "心",
    "wrongKanji": "必",
    "scripture": "申命記 30:10",
    "note": "これはあなたが、あなたの神、主の声に聞きしたがい、この律法の書にしるされた戒めと定めとを守り、心をつくし、精神をつくしてあなたの神、主に帰するからである。"
  },
  {
    "id": "8",
    "title": "求めよ、そうすれば、与えられるであろう。",
    "correctKanji": "求",
    "wrongKanji": "米",
    "scripture": "ルカによる福音書 11:9",
    "note": "そこでわたしはあなたがたに言う。求めよ、そうすれば、与えられるであろう。捜せ、そうすれば見いだすであろう。門をたたけ、そうすれば、あけてもらえるであろう。"
  },
  {
    "id": "9",
    "title": "良い地",
    "correctKanji": "地",
    "wrongKanji": "池",
    "scripture": "マタイによる福音書 13:8",
    "note": "ほかの種は良い地に落ちて実を結び、あるものは百倍、あるものは六十倍、あるものは三十倍にもなった。"
  },
  {
    "id": "10",
    "title": "からしの種粒ほどの信仰",
    "correctKanji": "山",
    "wrongKanji": "凵",
    "scripture": "マタイ 17:20",
    "note": "イエスは彼らに言われた，「あなた方の信仰が少ないためです。あなた方に真実に言いますが，からしの種粒ほどの信仰があるなら，この山に，『ここからあそこに移れ』と言うとしても，それは移るのであり，何事もあなた方にとって不可能ではないのです」"
  },
  {
    "id": "11",
    "title": "力をつくし、思いをつくして",
    "correctKanji": "力",
    "wrongKanji": "刀",
    "scripture": "ルカによる福音書 10:27",
    "note": "彼は答えて言った、「『心をつくし、精神をつくし、力をつくし、思いをつくして、主なるあなたの神を愛せよ』。また、『自分を愛するように、あなたの隣り人を愛せよ』とあります」。"
  },
  {
    "id": "12",
    "title": "涙とともに種を蒔く者",
    "correctKanji": "涙",
    "wrongKanji": "捩",
    "scripture": "詩編 126:5",
    "note": "涙とともに種を蒔く者は、喜び叫びながら刈り取ろう。"
  },
  {
    "id": "13",
    "title": "神の恵み",
    "correctKanji": "恵",
    "wrongKanji": "思",
    "scripture": "コリント人への第二の手紙 6:1-10",
    "note": "見よ、今は恵みの時、見よ、今は救の日である。悲しんでいるようであるが、常に喜んでおり、貧しいようであるが、多くの人を富ませ、何も持たないようであるが、すべての物を持っている。"
  },
  {
    "id": "14",
    "title": "自分の命を損したら、なんの得になろうか。",
    "correctKanji": "得",
    "wrongKanji": "損",
    "scripture": "マタイによる福音書 16:26",
    "note": "たとい人が全世界をもうけても、自分の命を損したら、なんの得になろうか。また、人はどんな代価を払って、その命を買いもどすことができようか。"
  },
  {
    "id": "15",
    "title": "信じる者は、永遠の命を受ける",
    "correctKanji": "命",
    "wrongKanji": "令",
    "scripture": "ヨハネによる福音書 5:24",
    "note": "よくよくあなたがたに言っておく。わたしの言葉を聞いて、わたしをつかわされたかたを信じる者は、永遠の命を受け、またさばかれることがなく、死から命に移っているのである。"
  },
  {
    "id": "16",
    "title": "滅び行く古き人を脱ぎ捨て",
    "correctKanji": "脱",
    "wrongKanji": "腕",
    "scripture": "エペソ 4:21-24",
    "note": "あなたがたは、以前の生活に属する、情欲に迷って滅び行く古き人を脱ぎ捨て、心の深みまで新たにされて、真の義と聖とをそなえた神にかたどって造られた新しき人を着るべきである。"
  },
  {
    "id": "17",
    "title": "真の知識に至る新しき人を着たのである",
    "correctKanji": "新",
    "wrongKanji": "薪",
    "scripture": "コロサイ人への手紙 3:10",
    "note": "造り主のかたちに従って新しくされ、真の知識に至る新しき人を着たのである。"
  },
  {
    "id": "18",
    "title": "起きよ、光を放て",
    "correctKanji": "光",
    "wrongKanji": "先",
    "scripture": "イザヤ書 60:1-3",
    "note": "起きよ、光を放て。あなたの光が臨み、主の栄光があなたの上にのぼったから。見よ、暗きは地をおおい、やみはもろもろの民をおおう。しかし、あなたの上には主が朝日のごとくのぼられ、主の栄光があなたの上にあらわれる。"
  },
  {
    "id": "19",
    "title": "先の者はあとになり、あとの者は先になる",
    "correctKanji": "先",
    "wrongKanji": "光",
    "scripture": "マタイによる福音書 19:27-29",
    "note": "多くの先の者はあとになり、あとの者は先になるであろう。"
  },
  {
    "id": "20",
    "title": "悔い改めよ、天国は近づいた",
    "correctKanji": "近",
    "wrongKanji": "迎",
    "scripture": "マタイによる福音書 4:16-17",
    "note": "暗黒の中に住んでいる民は大いなる光を見、死の地、死の陰に住んでいる人々に、光がのぼった。この時からイエスは教を宣べはじめて言われた、「悔い改めよ、天国は近づいた」。"
  },
  {
    "id": "21",
    "title": "天国は、畑に隠してある宝のようなものである",
    "correctKanji": "宝",
    "wrongKanji": "定",
    "scripture": "マタイによる福音書 13:44",
    "note": "天国は、畑に隠してある宝のようなものである。人がそれを見つけると隠しておき、喜びのあまり、行って持ち物をみな売りはらい、そしてその畑を買うのである。"
  },
  {
    "id": "22",
    "title": "天国は激しく襲われている",
    "correctKanji": "襲",
    "wrongKanji": "藝",
    "scripture": "マタイによる福音書 11:12",
    "note": "バプテスマのヨハネの時から今に至るまで、天国は激しく襲われている。そして激しく襲う者たちがそれを奪い取っている。"
  },
  {
    "id": "23",
    "title": "実際のおこないに応じて、報いるであろう",
    "correctKanji": "報",
    "wrongKanji": "執",
    "scripture": "マタイによる福音書 16:27",
    "note": "人の子は父の栄光のうちに、御使たちを従えて来るが、その時には、実際のおこないに応じて、それぞれに報いるであろう。"
  },
  {
    "id": "24",
    "title": "わずかなものに忠実であったから、多くのものを管理させよう",
    "correctKanji": "忠",
    "wrongKanji": "患",
    "scripture": "マタイによる福音書 25:23",
    "note": "主人は彼に言った、『良い忠実な僕よ、よくやった。あなたはわずかなものに忠実であったから、多くのものを管理させよう。主人と一緒に喜んでくれ』。"
  },
  {
    "id": "25",
    "title": "あなたがたを、人間をとる漁師にしてあげよう",
    "correctKanji": "漁",
    "wrongKanji": "渡",
    "scripture": "マタイによる福音書 4:17-20",
    "note": "イエスは彼らに言われた、「わたしについてきなさい。あなたがたを、人間をとる漁師にしてあげよう」。すると、彼らはすぐに網を捨てて、イエスに従った。"
  },
  {
    "id": "26",
    "title": "あなたがたの義",
    "correctKanji": "義",
    "wrongKanji": "儀",
    "scripture": "マタイによる福音書 5:20",
    "note": "わたしは言っておく。あなたがたの義が律法学者やパリサイ人の義にまさっていなければ、決して天国に、はいることはできない。"
  },
  {
    "id": "27",
    "title": "権威ある教え",
    "correctKanji": "教",
    "wrongKanji": "敦",
    "scripture": "マタイによる福音書 7:28-29",
    "note": "イエスがこれらの言を語り終えられると、群衆はその教にひどく驚いた。それは律法学者たちのようにではなく、権威ある者のように、教えられたからである。"
  },
  {
    "id": "28",
    "title": "完全な者",
    "correctKanji": "完",
    "wrongKanji": "官",
    "scripture": "マタイによる福音書 5:48",
    "note": "それだから、あなたがたの天の父が完全であられるように、あなたがたも完全な者となりなさい。"
  },
  {
    "id": "29",
    "title": "心の清い人達",
    "correctKanji": "清",
    "wrongKanji": "晴",
    "scripture": "マタイによる福音書 5:8",
    "note": "心の清い人たちは、さいわいである、彼らは神を見るであろう。"
  },
  {
    "id": "30",
    "title": "ナルドの香油",
    "correctKanji": "香",
    "wrongKanji": "者",
    "scripture": "ヨハネによる福音書 12:1-3",
    "note": "その時、マリヤは高価で純粋なナルドの香油一斤を持ってきて、イエスの足にぬり、自分の髪の毛でそれをふいた。すると、香油のかおりが家にいっぱいになった。"
  },
  {
    "id": "31",
    "title": "あなたと話をしているこのわたしが、それである",
    "correctKanji": "話",
    "wrongKanji": "詰",
    "scripture": "ヨハネによる福音書 4:23-30",
    "note": "神は霊であるから、礼拝をする者も、霊とまこととをもって礼拝すべきである。イエスは女に言われた、「あなたと話をしているこのわたしが、それである」。"
  },
  {
    "id": "32",
    "title": "からだは一つ",
    "correctKanji": "体",
    "wrongKanji": "休",
    "scripture": "コリント人への第一の手紙 12:12-31",
    "note": "からだが一つであっても肢体は多くあり、また、からだのすべての肢体が多くあっても、からだは一つであるように、キリストの場合も同様である。"
  },
  {
    "id": "33",
    "title": "王、わが主よ",
    "correctKanji": "王",
    "wrongKanji": "玉",
    "scripture": "列王紀上 20:4",
    "note": "イスラエルの王は答えた、「王、わが主よ、仰せのとおり、わたしと、わたしの持ち物は皆あなたのものです」。"
  },
  {
    "id": "34",
    "title": "全地よ、神にむかって喜び呼ばわれ。",
    "correctKanji": "全",
    "wrongKanji": "金",
    "scripture": "詩篇 66:1",
    "note": "全地よ、神にむかって喜び呼ばわれ。"
  },
  {
    "id": "35",
    "title": "主よ、あなたの右の手は敵を打ち砕く",
    "correctKanji": "手",
    "wrongKanji": "毛",
    "scripture": "出エジプト記 15:6",
    "note": "主よ、あなたの右の手は力をもって栄光にかがやく、主よ、あなたの右の手は敵を打ち砕く。"
  },
  {
    "id": "36",
    "title": "全き人に目をそそぎ、直き人を見よ",
    "correctKanji": "人",
    "wrongKanji": "入",
    "scripture": "詩篇 37:37",
    "note": "全き人に目をそそぎ、直き人を見よ。おだやかな人には子孫がある。"
  },
  {
    "id": "37",
    "title": "知恵ある者の耳は知識を求める。",
    "correctKanji": "識",
    "wrongKanji": "職",
    "scripture": "箴言 18:15",
    "note": "さとき者の心は知識を得、知恵ある者の耳は知識を求める。"
  },
  {
    "id": "38",
    "title": "正義の結ぶ実はとこしえの平安と信頼である。",
    "correctKanji": "義",
    "wrongKanji": "儀",
    "scripture": "イザヤ書 32:17",
    "note": "正義は平和を生じ、正義の結ぶ実はとこしえの平安と信頼である。"
  },
  {
    "id": "39",
    "title": "わたしは主を待ち望みます、わが魂は待ち望みます。",
    "correctKanji": "待",
    "wrongKanji": "持",
    "scripture": "詩篇 130:5",
    "note": "わたしは主を待ち望みます、わが魂は待ち望みます。そのみ言葉によって、わたしは望みをいだきます。"
  },
  {
    "id": "40",
    "title": "ガリラヤの海べで",
    "correctKanji": "海",
    "wrongKanji": "悔",
    "scripture": "マタイによる福音書 4:18-20",
    "note": "イエスは彼らに言われた、「わたしについてきなさい。あなたがたを、人間をとる漁師にしてあげよう」。"
  },
  {
    "id": "41",
    "title": "三つよりの綱はたやすくは切れない",
    "correctKanji": "綱",
    "wrongKanji": "鋼",
    "scripture": "伝道の書 4:12",
    "note": "人がもし、そのひとりを攻め撃ったなら、ふたりで、それに当るであろう。三つよりの綱はたやすくは切れない。"
  },
  {
    "id": "42",
    "title": "復活",
    "correctKanji": "活",
    "wrongKanji": "括",
    "scripture": "コリント人への第一の手紙 15:42－44",
    "note": "死人の復活も、また同様である。朽ちるものでまかれ、朽ちないものによみがえり、卑しいものでまかれ、栄光あるものによみがえり、弱いものでまかれ、強いものによみがえるのである。"
  },
  {
    "id": "43",
    "title": "真理にしたがえば力がある。",
    "correctKanji": "真",
    "wrongKanji": "直",
    "scripture": "コリント人への第二の手紙 13:8",
    "note": "わたしたちは、真理に逆らっては何をする力もなく、真理にしたがえば力がある。"
  },
  {
    "id": "44",
    "title": "あらゆる種類の魚を囲みいれる網",
    "correctKanji": "網",
    "wrongKanji": "綱",
    "scripture": "マタイによる福音書 13:47",
    "note": "また天国は、海におろして、あらゆる種類の魚を囲みいれる網のようなものである。"
  },
  {
    "id": "45",
    "title": "わたしの言葉は滅びることがない",
    "correctKanji": "滅",
    "wrongKanji": "減",
    "scripture": "マタイによる福音書 24:35",
    "note": "天地は滅びるであろう。しかしわたしの言葉は滅びることがない。"
  },
  {
    "id": "46",
    "title": "疲れた者、重荷を負う者",
    "correctKanji": "休",
    "wrongKanji": "体",
    "scripture": "マタイによる福音書 11:28",
    "note": "すべて、疲れた人、重荷を負っている人は、わたしのところに来なさい。わたしがあなたがたを休ませてあげよう。"
  },
  {
    "id": "47",
    "title": "地の塩、世の光",
    "correctKanji": "塩",
    "wrongKanji": "皿",
    "scripture": "マタイによる福音書 5:13-14",
    "note": "あなたがたは、地の塩である。もし塩のききめがなくなったら、何によってその味が取り戻されようか。あなたがたは、世の光である。山の上にある町は隠れることができない。"
  },
  {
    "id": "48",
    "title": "信仰、希望、愛",
    "correctKanji": "信",
    "wrongKanji": "言",
    "scripture": "コリント人への第一の手紙 13:13",
    "note": "このように、いつまでも存続するものは、信仰と希望と愛と、この三つである。このうちで最も大いなるものは、愛である。"
  },
  {
    "id": "49",
    "title": "平和をつくり出す人",
    "correctKanji": "和",
    "wrongKanji": "知",
    "scripture": "マタイによる福音書 5:9",
    "note": "平和をつくり出す人たちは、さいわいである、彼らは神の子と呼ばれるであろう。"
  },
  {
    "id": "50",
    "title": "善をもって悪に勝て",
    "correctKanji": "勝",
    "wrongKanji": "騰",
    "scripture": "ローマ人への手紙 12:21",
    "note": "悪に負けてはいけない。かえって、善をもって悪に勝ちなさい。"
  }
];

// ==========================================================================
// Web Audio API による効果音シンセサイザー (外部音源なしで動作)
// ==========================================================================
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // 雅な二和音チャイム（E5 -> B5 -> E6）
    const notes = [659.25, 987.77, 1318.51];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.08);

      gain.gain.setValueAtTime(0, now + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.25, now + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.65);
    });
  }

  playWrong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.25);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, now);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }
}

const sounds = new SoundSynth();

// ==========================================================================
// 背景スターダスト Canvas パーティクル
// ==========================================================================
function initStardustCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const count = Math.min(80, Math.floor((width * height) / 14000));

  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.3 + 0.1,
      color: Math.random() > 0.4 ? "#ffd54f" : "#a5b4fc",
    });
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach((star) => {
      star.y -= star.speed;
      if (star.y < 0) {
        star.y = height;
        star.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.globalAlpha = star.alpha;
      ctx.shadowBlur = star.size * 3;
      ctx.shadowColor = star.color;
      ctx.fill();
    });

    requestAnimationFrame(loop);
  }

  loop();
}

// ==========================================================================
// 正解時スパークル Canvas エフェクト
// ==========================================================================
class SparkleManager {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.id = "sparkle-canvas";
    this.canvas.style.position = "fixed";
    this.canvas.style.top = "0";
    this.canvas.style.left = "0";
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.style.pointerEvents = "none";
    this.canvas.style.zIndex = "9999";
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.particles = [];
    this.resize();
    window.addEventListener("resize", () => this.resize());
    this.loop();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(x, y, count = 45) {
    const colors = ["#ffd700", "#fff8e1", "#ffb300", "#60a5fa", "#ffffff"];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 2;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        life: 1,
        decay: Math.random() * 0.02 + 0.015,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.2,
      });
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15; // 重力
      p.alpha -= p.decay;
      p.rotation += p.rotSpeed;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = p.color;

      // 4角の星を描画
      const s = p.size;
      this.ctx.beginPath();
      this.ctx.moveTo(0, -s);
      this.ctx.lineTo(s * 0.3, -s * 0.3);
      this.ctx.lineTo(s, 0);
      this.ctx.lineTo(s * 0.3, s * 0.3);
      this.ctx.lineTo(0, s);
      this.ctx.lineTo(-s * 0.3, s * 0.3);
      this.ctx.lineTo(-s, 0);
      this.ctx.lineTo(-s * 0.3, -s * 0.3);
      this.ctx.closePath();
      this.ctx.fill();

      this.ctx.restore();
    }

    requestAnimationFrame(() => this.loop());
  }
}

let sparkles = null;

// ==========================================================================
// Web体験版ゲームエンジン
// ==========================================================================
class WebDemoGame {
  constructor() {
    this.stage = 1;
    this.score = 0;
    this.difficulty = "easy"; // easy (4x4), medium (6x6)
    this.currentItem = null;
    this.correctIndex = -1;
    this.canClick = true;

    this.gridEl = document.getElementById("demo-kanji-grid");
    this.targetCharEl = document.getElementById("demo-target-char");
    this.stageBadgeEl = document.getElementById("demo-stage-badge");
    this.titleTextEl = document.getElementById("demo-title-text");
    this.scoreValEl = document.getElementById("demo-score-value");
    this.citationEl = document.getElementById("demo-scripture-citation");
    this.bodyEl = document.getElementById("demo-scripture-body");
    this.feedbackEl = document.getElementById("demo-feedback");
    this.nextBtnEl = document.getElementById("btn-next-stage");

    this.initEvents();
    this.startStage();
  }

  get sideSize() {
    return this.difficulty === "easy" ? 4 : 6;
  }

  initEvents() {
    // 難易度切り替えボタン
    document.querySelectorAll(".diff-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".diff-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.difficulty = btn.dataset.diff;
        sounds.playClick();
        this.startStage();
      });
    });

    if (this.nextBtnEl) {
      this.nextBtnEl.addEventListener("click", () => {
        sounds.playClick();
        this.stage++;
        this.startStage();
      });
    }
  }

  startStage() {
    this.canClick = true;
    this.currentItem = OHSHU_QUESTIONS[Math.floor(Math.random() * OHSHU_QUESTIONS.length)];

    const side = this.sideSize;
    const totalCount = side * side;
    this.correctIndex = Math.floor(Math.random() * totalCount);

    // UI更新
    if (this.stageBadgeEl) this.stageBadgeEl.textContent = `第 ${this.stage} 章`;
    if (this.titleTextEl) this.titleTextEl.textContent = this.currentItem.title;
    if (this.targetCharEl) this.targetCharEl.textContent = this.currentItem.correctKanji;
    if (this.citationEl) this.citationEl.textContent = this.currentItem.scripture;
    if (this.bodyEl) this.bodyEl.textContent = this.currentItem.note;

    if (this.feedbackEl) {
      this.feedbackEl.style.display = "none";
    }

    // グリッド生成
    if (this.gridEl) {
      this.gridEl.innerHTML = "";
      this.gridEl.style.gridTemplateColumns = `repeat(${side}, 1fr)`;

      for (let i = 0; i < totalCount; i++) {
        const cell = document.createElement("button");
        cell.className = "kanji-cell";
        cell.dataset.index = i;

        // 正解のマスだけ correctKanji、それ以外は wrongKanji
        const kanji = i === this.correctIndex ? this.currentItem.correctKanji : this.currentItem.wrongKanji;
        cell.textContent = kanji;

        // フォントサイズ調整
        cell.style.fontSize = side === 4 ? "1.6rem" : "1.15rem";

        cell.addEventListener("click", (e) => this.handleCellClick(i, cell, e));
        this.gridEl.appendChild(cell);
      }
    }
  }

  handleCellClick(index, cellEl, event) {
    if (!this.canClick) return;

    if (index === this.correctIndex) {
      // 正解！
      this.canClick = false;
      cellEl.classList.add("correct-hit");
      sounds.playCorrect();

      // スコア計算
      const gain = 100 * this.stage * (this.difficulty === "medium" ? 2 : 1);
      this.score += gain;
      if (this.scoreValEl) this.scoreValEl.textContent = this.score;

      // パーティクル噴射
      const rect = cellEl.getBoundingClientRect();
      if (sparkles) {
        sparkles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 50);
      }

      // フィードバック表示
      if (this.feedbackEl) {
        this.feedbackEl.style.display = "flex";
        this.feedbackEl.querySelector(".feedback-msg").innerHTML = `
          <span style="color: #4ade80;">正解！+${gain} pts</span>
          <span style="font-size: 0.85rem; color: #cbd5e1; margin-left: 8px;">『${this.currentItem.title}』のみことばが開かれました</span>
        `;
      }
    } else {
      // 不正解
      cellEl.classList.add("wrong-hit");
      sounds.playWrong();
      this.score = Math.max(0, this.score - 30);
      if (this.scoreValEl) this.scoreValEl.textContent = this.score;

      setTimeout(() => {
        cellEl.classList.remove("wrong-hit");
      }, 500);
    }
  }
}

// ==========================================================================
// みことばギャラリー・検索・おみくじ機能
// ==========================================================================
function initScriptureGallery() {
  const container = document.getElementById("scriptures-grid");
  const searchInput = document.getElementById("scripture-search-input");
  const omikujiBtn = document.getElementById("btn-omikuji");
  const modal = document.getElementById("scripture-modal");
  const modalClose = document.getElementById("modal-close-btn");

  if (!container) return;

  function renderCards(items) {
    container.innerHTML = "";
    if (items.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">該当するみことばが見つかりませんでした。</div>`;
      return;
    }

    items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "scripture-card";
      card.innerHTML = `
        <div>
          <div class="card-top">
            <span class="kanji-pair">正:「${item.correctKanji}」/ 異:「${item.wrongKanji}」</span>
            <span class="card-citation">${item.scripture}</span>
          </div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-snippet">${item.note}</p>
        </div>
        <div class="card-footer">
          <button class="btn-read-more" data-id="${item.id}">全文を読む →</button>
        </div>
      `;

      card.querySelector(".btn-read-more").addEventListener("click", () => {
        sounds.playClick();
        openModal(item);
      });

      container.appendChild(card);
    });
  }

  function openModal(item) {
    if (!modal) return;
    document.getElementById("modal-kanji-pair").textContent = `正解:「${item.correctKanji}」/ 間違い:「${item.wrongKanji}」`;
    document.getElementById("modal-citation").textContent = item.scripture;
    document.getElementById("modal-title").textContent = item.title;
    document.getElementById("modal-body").textContent = item.note;
    modal.classList.add("open");
  }

  function closeModal() {
    if (modal) modal.classList.remove("open");
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // リアルタイム検索
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        renderCards(OHSHU_QUESTIONS);
        return;
      }
      const filtered = OHSHU_QUESTIONS.filter(
        (it) =>
          it.title.toLowerCase().includes(q) ||
          it.scripture.toLowerCase().includes(q) ||
          it.note.toLowerCase().includes(q) ||
          it.correctKanji.includes(q) ||
          it.wrongKanji.includes(q)
      );
      renderCards(filtered);
    });
  }

  // おみくじボタン
  if (omikujiBtn) {
    omikujiBtn.addEventListener("click", () => {
      sounds.playCorrect();
      const randomItem = OHSHU_QUESTIONS[Math.floor(Math.random() * OHSHU_QUESTIONS.length)];
      openModal(randomItem);
    });
  }

  // 初期表示（最初の12件を表示、または全件）
  renderCards(OHSHU_QUESTIONS);
}

// ==========================================================================
// ナビゲーション・UI初期化
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // スターダストCanvas初期化
  initStardustCanvas();

  // スパークル初期化
  sparkles = new SparkleManager();

  // Web体験版初期化
  const demo = new WebDemoGame();

  // みことばギャラリー初期化
  initScriptureGallery();

  // ナビバーのスクロール検知
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // モバイルメニュー切り替え
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    // リンククリック時に閉じる
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  // サウンド切り替えボタン
  const soundBtn = document.getElementById("sound-toggle-btn");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      sounds.enabled = !sounds.enabled;
      soundBtn.innerHTML = sounds.enabled
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>`;
      if (sounds.enabled) sounds.playClick();
    });
  }

  // プライバシーポリシーモーダル
  const privacyLink = document.getElementById("privacy-link");
  const privacyModal = document.getElementById("privacy-modal");
  const privacyClose = document.getElementById("privacy-close-btn");

  if (privacyLink && privacyModal) {
    privacyLink.addEventListener("click", (e) => {
      e.preventDefault();
      sounds.playClick();
      privacyModal.classList.add("open");
    });
  }
  if (privacyClose && privacyModal) {
    privacyClose.addEventListener("click", () => {
      privacyModal.classList.remove("open");
    });
  }
  if (privacyModal) {
    privacyModal.addEventListener("click", (e) => {
      if (e.target === privacyModal) privacyModal.classList.remove("open");
    });
  }
});
