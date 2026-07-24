import { useState } from "react";
import { CheckSquare, Square, Printer } from "lucide-react";
import logoCUI from "@/assets/logo-cui-nobg.png";
import logoUPI from "@/assets/logo-upi-nobg.png";
import jobsheetImg from "@/assets/jobsheet-image1.png";

// ── Checklist hook ──────────────────────────────────────────────────────────
function useChecklist(key: string, count: number) {
  const stored = localStorage.getItem(key);
  const init: boolean[] = stored
    ? JSON.parse(stored)
    : Array(count).fill(false);
  const [checked, setChecked] = useState<boolean[]>(init);

  const toggle = (i: number) => {
    const next = checked.map((v, idx) => (idx === i ? !v : v));
    setChecked(next);
    localStorage.setItem(key, JSON.stringify(next));
  };
  return { checked, toggle };
}

// ── Sub-components ──────────────────────────────────────────────────────────
function CheckItem({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="flex items-start gap-2 text-left w-full group"
    >
      {checked ? (
        <CheckSquare className="w-4 h-4 text-primary mt-0.5 shrink-0" />
      ) : (
        <Square className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0 group-hover:text-primary/60 transition-colors" />
      )}
      <span
        className={`text-sm leading-snug transition-colors ${
          checked ? "line-through text-muted-foreground" : "text-foreground/90"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

function SectionCard({
  title,
  children,
  accent = false,
}: {
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <div
        className={`px-5 py-3 border-b border-border ${
          accent ? "bg-primary/10" : "bg-secondary/40"
        }`}
      >
        <h2
          className={`font-bold text-sm tracking-wide uppercase ${
            accent ? "text-primary" : "text-foreground"
          }`}
        >
          {title}
        </h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────
export default function Jobsheet() {
  // Checklist states (persisted in localStorage)
  const k3Before = useChecklist("js_k3_before", 5);
  const k3During = useChecklist("js_k3_during", 3);
  const persiapan = useChecklist("js_persiapan", 6);
  const mesin = useChecklist("js_mesin", 3);
  const pemeriksaan = useChecklist("js_pemeriksaan", 6);
  const penilaian = useChecklist("js_penilaian", 8);

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full pb-16">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        {/* Top bar */}
        <div className="bg-primary px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoCUI} alt="CUI" className="h-8 w-8 object-contain" />
            <img src={logoUPI} alt="UPI" className="h-8 object-contain brightness-0 invert" />
          </div>
          <span className="text-primary-foreground font-bold text-xs tracking-widest uppercase opacity-80">
            Kode Job: TW-01
          </span>
        </div>
        {/* Title */}
        <div className="px-6 py-5 text-center border-b border-border">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
            PT. Coppalt Utama Indomelt
          </p>
          <h1 className="text-2xl font-extrabold text-foreground">
            Job Sheet Praktik Pengelasan SMAW
          </h1>
          <p className="text-primary font-semibold mt-1">
            Praktik Tack Weld Sambungan T-Joint
          </p>
        </div>

        {/* Identitas grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 divide-x divide-y divide-border text-sm">
          {[
            ["Proses", "SMAW"],
            ["Posisi", "1F (Flat Fillet)"],
            ["Material", "Mild Steel SS400"],
            ["Ketebalan", "6 mm"],
            ["Elektroda", "AWS E6013 Ø2,6 mm"],
            ["Arus", "70–90 Ampere"],
            ["Durasi", "±60 Menit"],
            ["Kode Job", "TW-01"],
          ].map(([label, value]) => (
            <div key={label} className="px-4 py-3">
              <p className="text-muted-foreground text-xs">{label}</p>
              <p className="font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 2-col layout ───────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Tujuan Praktik */}
        <SectionCard title="Tujuan Praktik">
          <p className="text-sm text-muted-foreground mb-3">
            Setelah melaksanakan praktik ini peserta mampu:
          </p>
          <ol className="space-y-1.5 list-decimal list-inside text-sm text-foreground/90">
            {[
              "Membaca gambar kerja.",
              "Menyiapkan material.",
              "Melakukan penyetelan mesin SMAW.",
              "Melakukan tack weld sesuai SOP.",
              "Melakukan pemeriksaan visual hasil tack weld.",
            ].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ol>
        </SectionCard>

        {/* Standar Kompetensi */}
        <SectionCard title="Standar Kompetensi" accent>
          <p className="text-sm text-muted-foreground mb-3">
            Peserta dinyatakan kompeten apabila mampu:
          </p>
          <ul className="space-y-1.5 text-sm text-foreground/90">
            {[
              "Menyiapkan material sesuai gambar kerja.",
              "Menjaga kesikuan sambungan.",
              "Melakukan tack weld sepanjang 10–20 mm.",
              "Membersihkan slag.",
              "Melakukan pemeriksaan visual.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      {/* ── Alat dan Bahan ─────────────────────────────────────────────── */}
      <SectionCard title="Alat dan Bahan">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          {/* Peralatan */}
          <div className="sm:col-span-2">
            <p className="font-semibold text-foreground mb-2">Peralatan</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              {[
                "Mesin Las SMAW",
                "Holder Elektroda",
                "Kabel Las",
                "Klem Massa",
                "Palu Terak",
                "Sikat Baja",
                "Siku Baja",
                "Meteran Baja",
                "C-Clamp",
                "APD Lengkap",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-foreground/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          {/* Bahan */}
          <div>
            <p className="font-semibold text-foreground mb-2">Bahan</p>
            <ul className="space-y-1 text-foreground/85">
              {[
                "Pelat A — SS400 150 × 50 × 6 mm",
                "Pelat B — SS400 100 × 50 × 6 mm",
                "Elektroda AWS E6013 Ø2,6 mm",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* ── K3 ─────────────────────────────────────────────────────────── */}
      <SectionCard title="Keselamatan Kerja (K3)">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-sm text-foreground mb-3">Sebelum Praktik</p>
            <div className="space-y-2">
              {[
                "Menggunakan APD lengkap",
                "Memeriksa mesin las",
                "Memastikan area kerja aman",
                "Memeriksa kabel dan holder",
                "Memastikan APAR tersedia",
              ].map((item, i) => (
                <CheckItem
                  key={item}
                  label={item}
                  checked={k3Before.checked[i]}
                  onToggle={() => k3Before.toggle(i)}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground mb-3">Selama Praktik</p>
            <div className="space-y-2">
              {[
                "Tidak menyentuh elektroda tanpa APD",
                "Menjaga area kerja tetap bersih",
                "Mengikuti instruksi pembimbing",
              ].map((item, i) => (
                <CheckItem
                  key={item}
                  label={item}
                  checked={k3During.checked[i]}
                  onToggle={() => k3During.toggle(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionCard>

      {/* ── Gambar Kerja ───────────────────────────────────────────────── */}
      <SectionCard title="Gambar Kerja — T-Joint TW-01">
        <div className="flex justify-center">
          <img
            src={jobsheetImg}
            alt="Gambar Kerja Tack Weld T-Joint TW-01"
            className="max-w-full rounded-lg border border-border bg-white p-2"
          />
        </div>
        <p className="text-xs text-center text-muted-foreground mt-3">
          Gambar Kerja Tack Weld Sambungan T-Joint (Kode: TW-01) — acuan pelaksanaan praktik
        </p>
      </SectionCard>

      {/* ── Langkah Kerja ──────────────────────────────────────────────── */}
      <SectionCard title="Langkah Kerja">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Persiapan */}
          <div>
            <p className="font-semibold text-sm text-primary mb-3">1. Persiapan</p>
            <div className="space-y-2">
              {[
                "Membaca gambar kerja.",
                "Menyiapkan material.",
                "Membersihkan permukaan material.",
                "Memasang benda kerja sesuai gambar.",
                "Memeriksa kesikuan menggunakan siku baja.",
                "Menjepit menggunakan C-Clamp.",
              ].map((item, i) => (
                <CheckItem
                  key={item}
                  label={item}
                  checked={persiapan.checked[i]}
                  onToggle={() => persiapan.toggle(i)}
                />
              ))}
            </div>
          </div>

          {/* Pengaturan Mesin */}
          <div>
            <p className="font-semibold text-sm text-primary mb-3">2. Pengaturan Mesin</p>
            <div className="space-y-2">
              {[
                "Memasang elektroda E6013 Ø2,6 mm.",
                "Mengatur arus 70–90 A.",
                "Memasang kabel massa.",
              ].map((item, i) => (
                <CheckItem
                  key={item}
                  label={item}
                  checked={mesin.checked[i]}
                  onToggle={() => mesin.toggle(i)}
                />
              ))}

              <p className="font-semibold text-sm text-primary mt-5 mb-3">3. Pelaksanaan Tack Weld</p>
              <ol className="space-y-1.5 text-sm text-foreground/85 list-decimal list-inside">
                <li>Menyalakan mesin las.</li>
                <li>Tack weld pada ujung pertama.</li>
                <li>Tack weld pada ujung kedua.</li>
                <li>Panjang tack weld 10–20 mm.</li>
                <li>Bersihkan terak (palu terak).</li>
                <li>Bersihkan dengan sikat baja.</li>
              </ol>
            </div>
          </div>

          {/* Pemeriksaan */}
          <div>
            <p className="font-semibold text-sm text-primary mb-3">4. Pemeriksaan Visual</p>
            <div className="space-y-2">
              {[
                "Posisi sesuai gambar",
                "Sudut 90°",
                "Tack weld rapi",
                "Tidak retak",
                "Tidak porositas",
                "Layak dilanjutkan ke pengelasan penuh",
              ].map((item, i) => (
                <CheckItem
                  key={item}
                  label={item}
                  checked={pemeriksaan.checked[i]}
                  onToggle={() => pemeriksaan.toggle(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionCard>

      {/* ── Checklist Penilaian ────────────────────────────────────────── */}
      <SectionCard title="Checklist Penilaian">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-secondary/60">
                <th className="border border-border px-3 py-2 text-left font-semibold w-8">No</th>
                <th className="border border-border px-3 py-2 text-left font-semibold">Aspek Pemeriksaan</th>
                <th className="border border-border px-3 py-2 text-center font-semibold w-16">Ya</th>
                <th className="border border-border px-3 py-2 text-center font-semibold w-16">Belum</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Menggunakan APD",
                "Membaca gambar kerja",
                "Material sesuai ukuran",
                "Posisi sambungan benar",
                "Tack weld sesuai ukuran",
                "Tack weld rapi",
                "Tidak terdapat cacat",
                "Area kerja bersih",
              ].map((aspek, i) => (
                <tr key={aspek} className="hover:bg-secondary/20 transition-colors">
                  <td className="border border-border px-3 py-2 text-center text-muted-foreground">{i + 1}</td>
                  <td className="border border-border px-3 py-2 text-foreground/90">{aspek}</td>
                  <td className="border border-border px-3 py-2 text-center">
                    <button
                      onClick={() => penilaian.toggle(i)}
                      className="w-5 h-5 rounded border-2 border-primary flex items-center justify-center mx-auto transition-colors"
                      style={{ background: penilaian.checked[i] ? 'var(--color-primary)' : 'transparent' }}
                    >
                      {penilaian.checked[i] && <span className="text-white text-xs font-bold">✓</span>}
                    </button>
                  </td>
                  <td className="border border-border px-3 py-2 text-center">
                    <button
                      onClick={() => penilaian.checked[i] && penilaian.toggle(i)}
                      className="w-5 h-5 rounded border-2 border-border flex items-center justify-center mx-auto transition-colors"
                      style={{ background: !penilaian.checked[i] ? 'rgba(var(--color-muted-foreground),0.15)' : 'transparent' }}
                    >
                      {!penilaian.checked[i] && <span className="text-muted-foreground text-xs font-bold">✗</span>}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* ── Penilaian Praktik ──────────────────────────────────────────── */}
      <SectionCard title="Komponen Penilaian Praktik">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-secondary/60">
                <th className="border border-border px-4 py-2 text-left font-semibold">Komponen Penilaian</th>
                <th className="border border-border px-4 py-2 text-center font-semibold w-20">Bobot</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Persiapan kerja", "20"],
                ["Penggunaan APD", "10"],
                ["Penyusunan benda kerja", "15"],
                ["Pelaksanaan tack weld", "35"],
                ["Pemeriksaan hasil", "20"],
              ].map(([komponen, bobot]) => (
                <tr key={komponen} className="hover:bg-secondary/20 transition-colors">
                  <td className="border border-border px-4 py-2 text-foreground/90">{komponen}</td>
                  <td className="border border-border px-4 py-2 text-center font-mono text-foreground">{bobot}</td>
                </tr>
              ))}
              <tr className="bg-primary/10 font-bold">
                <td className="border border-border px-4 py-2 text-foreground">Total</td>
                <td className="border border-border px-4 py-2 text-center font-mono text-primary">100</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* ── Catatan Pembimbing ─────────────────────────────────────────── */}
      <SectionCard title="Catatan Pembimbing">
        <div className="border border-dashed border-border rounded-lg p-4 min-h-[80px] bg-secondary/20">
          <p className="text-xs text-muted-foreground">
            ............................................................................................................................................................................................
            ............................................................................................................................................................................................
          </p>
        </div>
      </SectionCard>

      {/* ── Pengesahan ─────────────────────────────────────────────────── */}
      <SectionCard title="Pengesahan">
        <div className="grid grid-cols-3 gap-4 text-sm text-center">
          {["Peserta PKL", "Pembimbing Industri", "Instruktur"].map((role) => (
            <div key={role} className="flex flex-col gap-1">
              <p className="font-semibold text-foreground">{role}</p>
              <div className="border border-dashed border-border rounded-lg h-20 bg-secondary/20" />
              <p className="text-muted-foreground text-xs mt-1">
                Nama : ______________
              </p>
              <p className="text-muted-foreground text-xs">Tanggal : ____________</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* ── Print hint ─────────────────────────────────────────────────── */}
      <div className="flex justify-center">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
        >
          <Printer className="w-4 h-4" />
          Cetak Jobsheet
        </button>
      </div>
    </div>
  );
}
