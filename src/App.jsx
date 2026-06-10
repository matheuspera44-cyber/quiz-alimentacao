import { useState } from "react";

/* ─── QUESTIONS ─── */
const questions = [
  {
    id: 1,
    type: "emoji-pick",
    emoji: "🎯",
    q: "Qual é o principal objetivo da educação alimentar?",
    opts: [
      { label: "💊 Aumentar suplementos", val: 0 },
      { label: "🌿 Melhorar qualidade de vida e prevenir doenças", val: 1 },
      { label: "🚫 Eliminar carboidratos", val: 2 },
      { label: "🌱 Comer só orgânicos", val: 3 },
    ],
    correct: 1,
    explanation: "A educação alimentar busca promover saúde e prevenir doenças por meio de escolhas conscientes.",
  },
  {
    id: 2,
    type: "drag-sort",
    emoji: "🥗",
    q: "Selecione todos os alimentos IN NATURA que devem ser priorizados:",
    allItems: [
      { label: "🍎 Maçã", correct: true },
      { label: "🥦 Brócolis", correct: true },
      { label: "🍟 Batata frita", correct: false },
      { label: "🥕 Cenoura", correct: true },
      { label: "🥤 Refrigerante", correct: false },
      { label: "🍌 Banana", correct: true },
    ],
    explanation: "Alimentos in natura como frutas e verduras devem ser a base da alimentação saudável.",
  },
  {
    id: 3,
    type: "true-false",
    emoji: "💧",
    q: "\"Manter boa hidratação e planejar as refeições são atitudes que constroem hábitos saudáveis.\"",
    correct: true,
    explanation: "Correto! Hidratação e planejamento alimentar são pilares fundamentais de hábitos saudáveis.",
  },
  {
    id: 4,
    type: "number-slider",
    emoji: "👥",
    q: "Quantos participantes fizeram parte da pesquisa do projeto?",
    min: 3,
    max: 15,
    correct: 7,
    explanation: "A pesquisa contou com 7 participantes na faixa etária de 19 a 22 anos.",
  },
  {
    id: 5,
    type: "emoji-pick",
    emoji: "🏥",
    q: "Em quais áreas a nutricionista Fernanda atua?",
    opts: [
      { label: "🏋️ Apenas em academias", val: 0 },
      { label: "🏨 Apenas em hospitais particulares", val: 1 },
      { label: "🏛️ SUS, clínica e alimentação coletiva", val: 2 },
      { label: "🏫 Apenas em escolas", val: 3 },
    ],
    correct: 2,
    explanation: "Fernanda atua no SUS, em clínica particular e na área de alimentação coletiva.",
  },
  {
    id: 6,
    type: "match",
    emoji: "🍽️",
    q: "Conecte cada refeição à sugestão saudável correta do projeto:",
    pairs: [
      { left: "☀️ Café da manhã", right: "Iogurte natural com frutas e granola" },
      { left: "🌞 Almoço", right: "Frango grelhado com legumes" },
      { left: "🌙 Jantar", right: "Omelete nutritiva" },
      { left: "🍎 Lanche", right: "Sanduíche natural" },
    ],
    explanation: "Estas são as sugestões de refeições saudáveis apresentadas no projeto.",
  },
  {
    id: 7,
    type: "true-false",
    emoji: "👩‍⚕️",
    q: "\"A nutricionista Fernanda relatou que diabetes e hipertensão são as doenças mais frequentes nos seus atendimentos no SUS.\"",
    correct: true,
    explanation: "Correto! Fernanda destacou diabetes e hipertensão como as doenças mais comuns entre seus pacientes no SUS.",
  },
  {
    id: 8,
    type: "emoji-pick",
    emoji: "🎮",
    q: "Qual recurso lúdico foi escolhido para auxiliar a intervenção educativa do projeto?",
    opts: [
      { label: "🎭 Teatro educativo", val: 0 },
      { label: "🎲 Jogo de tabuleiro", val: 1 },
      { label: "❓ Quiz nutricional com perguntas rápidas", val: 2 },
      { label: "🔍 Caça-palavras", val: 3 },
    ],
    correct: 2,
    explanation: "O quiz nutricional foi escolhido por ser dinâmico, interativo e acessível para o público universitário.",
  },
  {
    id: 9,
    type: "fill-blank",
    emoji: "📋",
    q: "Complete: \"O projeto se chama ___ ___ ao Seu ___\"",
    blanks: ["Alimentação", "Saudável", "Alcance"],
    options: ["Alimentação", "Saudável", "Alcance", "Fitness", "Universitária", "Vida"],
    explanation: "O nome completo do projeto é \"Alimentação Saudável ao Seu Alcance\".",
  },
  {
    id: 10,
    type: "emoji-pick",
    emoji: "🎓",
    q: "Por que uma boa alimentação é especialmente importante para estudantes universitários?",
    opts: [
      { label: "⚖️ Apenas para ganhar peso", val: 0 },
      { label: "🏃 Apenas para praticar esportes", val: 1 },
      { label: "🧠 Para manter disposição, foco e rendimento diário", val: 2 },
      { label: "🛋️ Para evitar exercícios", val: 3 },
    ],
    correct: 2,
    explanation: "A alimentação adequada é fundamental para o desempenho acadêmico e bem-estar geral dos estudantes.",
  },
];

const GREEN  = "#1A6B3A";
const LIME   = "#52C870";
const MINT   = "#E8F7EE";
const CREAM  = "#F5F2EB";
const ORANGE = "#E07B3A";
const RED    = "#D44444";
const MUTED  = "#6B7C6D";
const WHITE  = "#ffffff";

/* ─── PARTICLES ─── */
function Particles({ show }) {
  const emojis = ["🥦","🍎","🥕","🍌","🥗","💧","🌿","🍇"];
  if (!show) return null;
  return (
    <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:999 }}>
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} style={{
          position:"absolute",
          left:`${Math.random()*90+5}%`,
          top:`${Math.random()*60+5}%`,
          fontSize:`${Math.random()*1.4+1}rem`,
          animation:`fall${i%3} 1.2s ease-out forwards`,
          animationDelay:`${Math.random()*0.5}s`,
          opacity:0,
        }}>
          {emojis[i % emojis.length]}
        </div>
      ))}
      <style>{`
        @keyframes fall0{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(80px) rotate(180deg);opacity:0}}
        @keyframes fall1{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(100px) rotate(-120deg);opacity:0}}
        @keyframes fall2{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(60px) rotate(240deg);opacity:0}}
      `}</style>
    </div>
  );
}

/* ─── PROGRESS BAR ─── */
function ProgressBar({ current, total, score }) {
  return (
    <div style={{ width:"100%", maxWidth:600, marginBottom:16 }}>
      <div style={{ display:"flex", justifyContent:"space-between", fontSize:".8rem", color:MUTED, fontWeight:700, marginBottom:5 }}>
        <span>Pergunta {current + 1} de {total}</span>
        <span style={{ color:GREEN }}>✅ {score} acertos</span>
      </div>
      <div style={{ height:10, background:"#D5EDD9", borderRadius:99, overflow:"hidden" }}>
        <div style={{ height:"100%", width:`${(current/total)*100}%`, background:`linear-gradient(90deg,${LIME},${GREEN})`, borderRadius:99, transition:"width .5s cubic-bezier(.4,0,.2,1)" }} />
      </div>
    </div>
  );
}

/* ─── EMOJI-PICK ─── */
function EmojiPick({ q, onAnswer, answered }) {
  const [sel, setSel] = useState(null);
  function pick(val) {
    if (answered) return;
    setSel(val);
    setTimeout(() => onAnswer(val === q.correct), 600);
  }
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
      {q.opts.map(o => {
        let bg = WHITE, border = "#E0EDE4", color = "#1C2B1E";
        if (sel !== null) {
          if (o.val === q.correct)  { bg = MINT;      border = LIME; }
          else if (o.val === sel)   { bg = "#FDEAEA"; border = RED; color = RED; }
        }
        return (
          <button key={o.val} onClick={() => pick(o.val)} disabled={answered}
            style={{ background:bg, border:`2px solid ${border}`, borderRadius:14, padding:"14px 18px", fontSize:"1rem", fontWeight:700, color, cursor:answered?"default":"pointer", textAlign:"left", transition:"all .2s", transform:sel===o.val?"scale(1.02)":"scale(1)" }}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/* ─── TRUE / FALSE ─── */
function TrueFalse({ q, onAnswer, answered }) {
  const [sel, setSel] = useState(null);
  function pick(val) {
    if (answered) return;
    setSel(val);
    setTimeout(() => onAnswer(val === q.correct), 600);
  }
  const opts = [{ label:"✅ Verdadeiro", val:true },{ label:"❌ Falso", val:false }];
  return (
    <div style={{ display:"flex", gap:12 }}>
      {opts.map(o => {
        let bg = WHITE, border = "#E0EDE4";
        if (sel !== null) {
          if (o.val === q.correct) { bg = MINT;      border = LIME; }
          else if (o.val === sel)  { bg = "#FDEAEA"; border = RED; }
        }
        return (
          <button key={String(o.val)} onClick={() => pick(o.val)} disabled={answered}
            style={{ flex:1, background:bg, border:`2px solid ${border}`, borderRadius:14, padding:"22px 10px", fontSize:"1.1rem", fontWeight:800, cursor:answered?"default":"pointer", transition:"all .2s" }}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/* ─── NUMBER SLIDER ─── */
function NumberSlider({ q, onAnswer, answered }) {
  const [val, setVal] = useState(Math.round((q.min + q.max) / 2));
  const [locked, setLocked] = useState(false);
  function confirm() {
    if (locked) return;
    setLocked(true);
    setTimeout(() => onAnswer(val === q.correct), 700);
  }
  const pct = ((val - q.min) / (q.max - q.min)) * 100;
  const isCorrect = locked && val === q.correct;
  const isWrong   = locked && val !== q.correct;
  return (
    <div style={{ textAlign:"center" }}>
      <div style={{ fontSize:"4rem", fontWeight:900, color:isCorrect?GREEN:isWrong?RED:GREEN, marginBottom:8, transition:"color .3s" }}>{val}</div>
      <div style={{ fontSize:".85rem", color:MUTED, marginBottom:20 }}>participantes</div>
      <div style={{ position:"relative", marginBottom:24 }}>
        <div style={{ height:8, background:"#D5EDD9", borderRadius:99, overflow:"hidden" }}>
          <div style={{ height:"100%", width:`${pct}%`, background:`linear-gradient(90deg,${LIME},${GREEN})`, borderRadius:99 }} />
        </div>
        <input type="range" min={q.min} max={q.max} value={val} disabled={locked}
          onChange={e => setVal(Number(e.target.value))}
          style={{ position:"absolute", top:0, left:0, width:"100%", opacity:0, height:8, cursor:locked?"default":"pointer" }} />
        <div style={{ display:"flex", justifyContent:"space-between", fontSize:".75rem", color:MUTED, marginTop:6 }}>
          <span>{q.min}</span><span>{q.max}</span>
        </div>
      </div>
      {!locked && (
        <button onClick={confirm} style={{ background:GREEN, color:WHITE, border:"none", borderRadius:12, padding:"12px 36px", fontSize:"1rem", fontWeight:800, cursor:"pointer" }}>
          Confirmar resposta
        </button>
      )}
      {locked && (
        <div style={{ background:isCorrect?MINT:"#FDEAEA", border:`2px solid ${isCorrect?LIME:RED}`, borderRadius:12, padding:"12px 18px", fontWeight:700, color:isCorrect?GREEN:RED }}>
          {isCorrect ? `✅ Correto! São ${q.correct} participantes.` : `❌ Errado. A resposta certa é ${q.correct} participantes.`}
        </div>
      )}
    </div>
  );
}

/* ─── DRAG SORT (click-to-select) ─── */
function DragSort({ q, onAnswer, answered }) {
  const [selected, setSelected] = useState([]);
  const [locked, setLocked]     = useState(false);
  function toggle(label) {
    if (locked) return;
    setSelected(s => s.includes(label) ? s.filter(x => x !== label) : [...s, label]);
  }
  function confirm() {
    if (locked || selected.length === 0) return;
    setLocked(true);
    const correctLabels = q.allItems.filter(i => i.correct).map(i => i.label);
    const ok = selected.length === correctLabels.length && correctLabels.every(l => selected.includes(l));
    setTimeout(() => onAnswer(ok), 700);
  }
  return (
    <div>
      <p style={{ fontSize:".85rem", color:MUTED, marginBottom:12, fontWeight:600 }}>👆 Toque nos alimentos in natura para selecioná-los</p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:20 }}>
        {q.allItems.map(item => {
          const isSel = selected.includes(item.label);
          let bg = WHITE, border = "#E0EDE4";
          if (locked) {
            if (item.correct)      { bg = MINT;      border = LIME; }
            else if (isSel)        { bg = "#FDEAEA"; border = RED; }
          } else if (isSel) { bg = MINT; border = LIME; }
          return (
            <button key={item.label} onClick={() => toggle(item.label)} disabled={locked}
              style={{ background:bg, border:`2px solid ${border}`, borderRadius:99, padding:"10px 18px", fontSize:".95rem", fontWeight:700, cursor:locked?"default":"pointer", transition:"all .2s", transform:isSel&&!locked?"scale(1.06)":"scale(1)" }}>
              {item.label}
            </button>
          );
        })}
      </div>
      {!locked && (
        <button onClick={confirm} disabled={selected.length === 0}
          style={{ background:selected.length===0?"#ccc":GREEN, color:WHITE, border:"none", borderRadius:12, padding:"12px 32px", fontSize:"1rem", fontWeight:800, cursor:selected.length===0?"default":"pointer" }}>
          Confirmar seleção
        </button>
      )}
    </div>
  );
}

/* ─── MATCH ─── */
function Match({ q, onAnswer, answered }) {
  const [leftSel, setLeftSel] = useState(null);
  const [matched, setMatched] = useState({});
  const [locked, setLocked]   = useState(false);
  function pickLeft(i)  { if (locked) return; setLeftSel(i); }
  function pickRight(label) {
    if (locked || leftSel === null) return;
    const newMatched = { ...matched, [leftSel]: label };
    setMatched(newMatched);
    setLeftSel(null);
    if (Object.keys(newMatched).length === q.pairs.length) {
      setLocked(true);
      const ok = q.pairs.every((p, i) => newMatched[i] === p.right);
      setTimeout(() => onAnswer(ok), 700);
    }
  }
  const usedRights = Object.values(matched);
  return (
    <div>
      <p style={{ fontSize:".82rem", color:MUTED, marginBottom:12, fontWeight:600 }}>
        {leftSel !== null ? `Agora toque na opção correta para "${q.pairs[leftSel].left}"` : "1️⃣ Toque em uma refeição  →  2️⃣ Toque na sugestão"}
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {q.pairs.map((p, i) => {
            const isMatched = matched[i] !== undefined;
            const isSel = leftSel === i;
            let bg = WHITE, border = "#E0EDE4";
            if (locked)       { bg = MINT;      border = LIME; }
            else if (isSel)   { bg = "#EAF7E5"; border = LIME; }
            else if (isMatched){ bg = "#F0FAF2"; border = "#A8DDB5"; }
            return (
              <button key={i} onClick={() => pickLeft(i)} disabled={locked || isMatched}
                style={{ background:bg, border:`2px solid ${border}`, borderRadius:10, padding:"11px 10px", fontSize:".85rem", fontWeight:700, cursor:locked||isMatched?"default":"pointer", transition:"all .2s" }}>
                {p.left}
                {isMatched && <div style={{ fontSize:".72rem", color:MUTED, marginTop:3 }}>→ {matched[i]}</div>}
              </button>
            );
          })}
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {q.pairs.map((p, i) => {
            const isUsed = usedRights.includes(p.right);
            return (
              <button key={i} onClick={() => pickRight(p.right)} disabled={locked || isUsed || leftSel === null}
                style={{ background:isUsed?"#F0FAF2":WHITE, border:`2px solid ${isUsed?"#A8DDB5":"#E0EDE4"}`, borderRadius:10, padding:"11px 10px", fontSize:".78rem", fontWeight:600, cursor:locked||isUsed||leftSel===null?"default":"pointer", opacity:leftSel===null&&!isUsed?.6:1, transition:"all .2s" }}>
                {p.right}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── FILL BLANK ─── */
function FillBlank({ q, onAnswer, answered }) {
  const [filled, setFilled] = useState(Array(q.blanks.length).fill(null));
  const [pool, setPool]     = useState([...q.options]);
  const [locked, setLocked] = useState(false);
  function pickOption(word) {
    if (locked) return;
    const idx = filled.indexOf(null);
    if (idx === -1) return;
    const newFilled = [...filled];
    newFilled[idx] = word;
    setFilled(newFilled);
    setPool(p => p.filter(w => w !== word));
    if (newFilled.every(f => f !== null)) {
      setLocked(true);
      const ok = newFilled.every((f, i) => f === q.blanks[i]);
      setTimeout(() => onAnswer(ok), 700);
    }
  }
  function removeBlank(idx) {
    if (locked) return;
    const word = filled[idx];
    if (!word) return;
    setPool(p => [...p, word]);
    const newFilled = [...filled];
    newFilled[idx] = null;
    setFilled(newFilled);
  }
  return (
    <div>
      <div style={{ background:"#F0F9F3", borderRadius:14, padding:"18px 16px", marginBottom:20, fontSize:"1rem", fontWeight:700, lineHeight:2, textAlign:"center" }}>
        "O projeto se chama{" "}
        {filled.map((f, i) => (
          <span key={i}>
            <span onClick={() => removeBlank(i)}
              style={{ display:"inline-block", minWidth:110, borderBottom:`2px solid ${f?LIME:"#aaa"}`, padding:"2px 8px", cursor:f&&!locked?"pointer":"default", color:f?GREEN:MUTED, background:f?MINT:"transparent", borderRadius:6, margin:"0 2px" }}>
              {f || "___"}
            </span>
            {i === 0 ? " " : i === 1 ? " ao Seu " : ""}
          </span>
        ))}
        "
      </div>
      <p style={{ fontSize:".82rem", color:MUTED, marginBottom:10, fontWeight:600 }}>Toque nas palavras para preencher as lacunas:</p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
        {pool.map(w => (
          <button key={w} onClick={() => pickOption(w)}
            style={{ background:WHITE, border:`2px solid ${LIME}`, borderRadius:99, padding:"8px 18px", fontSize:".9rem", fontWeight:700, color:GREEN, cursor:"pointer" }}>
            {w}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── QUESTION CARD ─── */
function QuestionCard({ q, onAnswer, answered }) {
  return (
    <div style={{ background:WHITE, borderRadius:20, boxShadow:"0 6px 32px rgba(26,107,58,.10)", padding:"28px 24px", width:"100%", maxWidth:600, animation:"slideIn .35s ease" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
        <span style={{ fontSize:"2rem" }}>{q.emoji}</span>
        <span style={{ fontSize:".78rem", fontWeight:900, letterSpacing:".1em", textTransform:"uppercase", color:LIME }}>Pergunta {q.id} de 10</span>
      </div>
      <p style={{ fontSize:"1.05rem", fontWeight:700, lineHeight:1.5, marginBottom:20, color:"#1C2B1E" }}>{q.q}</p>
      {q.type === "emoji-pick"    && <EmojiPick    q={q} onAnswer={onAnswer} answered={answered} />}
      {q.type === "true-false"    && <TrueFalse    q={q} onAnswer={onAnswer} answered={answered} />}
      {q.type === "number-slider" && <NumberSlider q={q} onAnswer={onAnswer} answered={answered} />}
      {q.type === "drag-sort"     && <DragSort     q={q} onAnswer={onAnswer} answered={answered} />}
      {q.type === "match"         && <Match        q={q} onAnswer={onAnswer} answered={answered} />}
      {q.type === "fill-blank"    && <FillBlank    q={q} onAnswer={onAnswer} answered={answered} />}
    </div>
  );
}

/* ─── FEEDBACK BANNER ─── */
function FeedbackBanner({ correct, explanation, onNext, isLast }) {
  return (
    <div style={{ width:"100%", maxWidth:600, marginTop:14, background:correct?MINT:"#FDEAEA", border:`2px solid ${correct?LIME:RED}`, borderRadius:16, padding:"16px 20px", animation:"slideIn .3s ease" }}>
      <div style={{ fontWeight:800, fontSize:"1rem", color:correct?GREEN:RED, marginBottom:6 }}>
        {correct ? "✅ Correto! Muito bem!" : "❌ Não foi dessa vez!"}
      </div>
      <div style={{ fontSize:".88rem", color:"#333", lineHeight:1.55, marginBottom:14 }}>{explanation}</div>
      <button onClick={onNext} style={{ background:correct?GREEN:ORANGE, color:WHITE, border:"none", borderRadius:10, padding:"11px 28px", fontWeight:800, fontSize:".95rem", cursor:"pointer" }}>
        {isLast ? "Ver resultado 🏆" : "Próxima →"}
      </button>
    </div>
  );
}

/* ─── RESULT ─── */
function Result({ score, total, onRestart }) {
  const pct = Math.round((score / total) * 100);
  const grade =
    pct === 100 ? { t:"🥇", msg:"Perfeito! Você é um expert em alimentação saudável!" }
    : pct >= 80  ? { t:"🏆", msg:"Excelente! Você domina o tema do projeto." }
    : pct >= 60  ? { t:"🥈", msg:"Bom resultado! Vale revisar alguns pontos." }
    : pct >= 40  ? { t:"🌱", msg:"Você está crescendo! Revise o material e tente de novo." }
    :              { t:"📚", msg:"Estude o projeto e tente novamente — você consegue!" };
  return (
    <div style={{ background:WHITE, borderRadius:20, boxShadow:"0 6px 32px rgba(26,107,58,.12)", padding:"40px 28px", width:"100%", maxWidth:600, textAlign:"center", animation:"slideIn .4s ease" }}>
      <div style={{ fontSize:"4rem", marginBottom:8 }}>{grade.t}</div>
      <h2 style={{ color:GREEN, fontSize:"1.7rem", fontWeight:900, marginBottom:4 }}>Quiz concluído!</h2>
      <div style={{ fontSize:"3.5rem", fontWeight:900, color:GREEN, margin:"16px 0 4px", lineHeight:1 }}>
        {score}<span style={{ fontSize:"1.5rem", color:MUTED }}>/{total}</span>
      </div>
      <div style={{ color:MUTED, fontWeight:700, marginBottom:20 }}>{pct}% de aproveitamento</div>
      <div style={{ height:12, background:"#D5EDD9", borderRadius:99, overflow:"hidden", marginBottom:20 }}>
        <div style={{ height:"100%", width:`${pct}%`, background:`linear-gradient(90deg,${LIME},${GREEN})`, borderRadius:99 }} />
      </div>
      <div style={{ background:CREAM, borderRadius:14, padding:"16px 18px", fontWeight:600, fontSize:".95rem", lineHeight:1.6, marginBottom:28, color:"#333" }}>
        {grade.msg}
      </div>
      <button onClick={onRestart} style={{ background:ORANGE, color:WHITE, border:"none", borderRadius:12, padding:"13px 40px", fontSize:"1rem", fontWeight:800, cursor:"pointer" }}>
        🔄 Jogar novamente
      </button>
    </div>
  );
}

/* ─── APP ─── */
export default function App() {
  const [screen, setScreen]           = useState("start");
  const [current, setCurrent]         = useState(0);
  const [score, setScore]             = useState(0);
  const [answered, setAnswered]       = useState(false);
  const [lastCorrect, setLastCorrect] = useState(null);
  const [showParticles, setShowParticles] = useState(false);

  function handleAnswer(correct) {
    setAnswered(true);
    setLastCorrect(correct);
    if (correct) {
      setScore(s => s + 1);
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 1400);
    }
  }

  function next() {
    if (current + 1 >= questions.length) {
      setScreen("result");
    } else {
      setCurrent(c => c + 1);
      setAnswered(false);
      setLastCorrect(null);
    }
  }

  function restart() {
    setCurrent(0); setScore(0); setAnswered(false); setLastCorrect(null);
    setScreen("start");
  }

  return (
    <div style={{ minHeight:"100vh", background:CREAM, fontFamily:"system-ui,sans-serif", display:"flex", flexDirection:"column", alignItems:"center", padding:"24px 16px 60px" }}>
      <style>{`
        * { box-sizing: border-box; }
        button { transition: transform .1s; }
        button:active:not(:disabled) { transform: scale(.97); }
        @keyframes slideIn { from { opacity:0; transform:translateY(18px) } to { opacity:1; transform:translateY(0) } }
      `}</style>

      <Particles show={showParticles} />

      {/* HEADER */}
      <div style={{ textAlign:"center", marginBottom:24 }}>
        <div style={{ fontSize:"2.2rem" }}>🥗</div>
        <div style={{ color:GREEN, fontWeight:900, fontSize:"1.05rem", marginTop:2 }}>Alimentação Saudável ao Seu Alcance</div>
      </div>

      {/* START */}
      {screen === "start" && (
        <div style={{ background:WHITE, borderRadius:20, boxShadow:"0 6px 32px rgba(26,107,58,.10)", padding:"40px 28px", maxWidth:520, width:"100%", textAlign:"center", animation:"slideIn .4s ease" }}>
          <div style={{ fontSize:"3rem", marginBottom:10 }}>🧠</div>
          <h1 style={{ color:GREEN, fontSize:"1.5rem", fontWeight:900, marginBottom:10 }}>Quiz Interativo</h1>
          <p style={{ color:MUTED, lineHeight:1.65, fontSize:".95rem", marginBottom:24 }}>
            10 perguntas com diferentes tipos de desafios — escolha, verdadeiro/falso, slider, conexão e mais!
          </p>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap", justifyContent:"center", marginBottom:28 }}>
            {["🎯 10 perguntas","⚡ 6 formatos","🏆 Placar final"].map(b => (
              <span key={b} style={{ background:MINT, color:GREEN, borderRadius:99, padding:"6px 14px", fontSize:".8rem", fontWeight:700 }}>{b}</span>
            ))}
          </div>
          <button onClick={() => setScreen("quiz")} style={{ background:GREEN, color:WHITE, border:"none", borderRadius:14, padding:"15px 52px", fontSize:"1.05rem", fontWeight:900, cursor:"pointer" }}>
            Começar! 🚀
          </button>
        </div>
      )}

      {/* QUIZ */}
      {screen === "quiz" && (
        <>
          <ProgressBar current={current} total={questions.length} score={score} />
          <QuestionCard q={questions[current]} onAnswer={handleAnswer} answered={answered} />
          {answered && (
            <FeedbackBanner
              correct={lastCorrect}
              explanation={questions[current].explanation}
              onNext={next}
              isLast={current + 1 >= questions.length}
            />
          )}
        </>
      )}

      {/* RESULT */}
      {screen === "result" && <Result score={score} total={questions.length} onRestart={restart} />}
    </div>
  );
}
