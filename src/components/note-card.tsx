export function NoteCard() {
  return (
    <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In tenetur qui
        vero cum laudantium eos perspiciatis dolor, cumque ducimus amet quis,
        natus, excepturi veniam iure nostrum dicta deserunt aliquid. Fugit.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In tenetur qui
        vero cum laudantium eos perspiciatis dolor, cumque ducimus amet quis,
        natus, excepturi veniam iure nostrum dicta deserunt aliquid. Fugit.
      </p>

      <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </div>
  );
}
