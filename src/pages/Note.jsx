import Sidebar from "../components/Sidebar";
import {
  UndoIcon,
  RedoIcon,
  PaintRollerIcon,
  EraserIcon,
  HeadingIcon,
  TextStyleIcon,
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
  HighlighterIcon,
  LinkIcon,
  PenIcon,
  PaperclipIcon,
  TableIcon,
  CheckCircleIcon,
  CommentPlusIcon,
  FontIcon,
  ListIcon,
  IndentIcon,
  PaletteIcon,
  SparkleIcon,
  ChevronDownIcon,
  ExpandIcon,
  PlusIcon,
  CloseIcon,
} from "../components/EditorIcons";

// Rent visuelt værktøjslinje-ikon uden funktion (kun udseende)
function ToolbarIcon({ icon: Icon, label, wide = false }) {
  return (
    <span
      title={label}
      className={
        "flex h-7 items-center justify-center rounded-md text-gray-500 " +
        (wide ? "gap-0.5 px-1.5" : "w-7")
      }
    >
      <Icon className="w-4 h-4" />
    </span>
  );
}

function ToolbarDropdown({ icon, text, label }) {
  return (
    <ToolbarIcon
      wide
      label={label}
      icon={() => (
        <span className="flex items-center gap-0.5">
          {icon}
          {text && (
            <span className="text-[13px] font-semibold text-gray-600">
              {text}
            </span>
          )}
          <ChevronDownIcon className="w-3 h-3 text-gray-400" />
        </span>
      )}
    />
  );
}

function Divider() {
  return <div className="mx-1 h-4 w-px bg-gray-200" />;
}

export default function Note() {
  return (
    <div className="flex h-screen bg-[#f3f3f3] font-sans text-gray-800">
      {/* Genbruger den eksisterende sidebjælke-komponent */}
      <Sidebar />

      {/* Hovedindhold */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Fane-bjælke */}
        <div className="h-11 flex-shrink-0 flex items-center justify-center gap-2 bg-white border-b border-gray-200">
          <div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1.5">
            <span className="text-[13px] font-semibold text-gray-800">
              Ny note
            </span>
            <CloseIcon className="w-3.5 h-3.5 text-gray-400" />
          </div>
          <span className="flex h-6 w-6 items-center justify-center rounded-md text-gray-400">
            <PlusIcon className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Værktøjslinje (rent visuel) */}
        <div className="h-11 flex-shrink-0 flex items-center gap-0.5 overflow-x-auto bg-white border-b border-gray-200 px-3">
          <ToolbarIcon icon={UndoIcon} label="Fortryd" />
          <ToolbarIcon icon={RedoIcon} label="Gentag" />
          <Divider />
          <ToolbarIcon icon={PaintRollerIcon} label="Kopiér formatering" />
          <ToolbarIcon icon={EraserIcon} label="Ryd formatering" />
          <Divider />
          <ToolbarDropdown
            icon={<HeadingIcon level="2" className="w-4 h-4" />}
            label="Overskrift 2"
          />
          <ToolbarDropdown
            icon={<HeadingIcon level="3" className="w-4 h-4" />}
            label="Overskrift 3"
          />
          <ToolbarDropdown
            icon={<TextStyleIcon className="w-4 h-4" />}
            label="Tekststil"
          />
          <Divider />
          <ToolbarIcon icon={BoldIcon} label="Fed" />
          <ToolbarIcon icon={ItalicIcon} label="Kursiv" />
          <ToolbarIcon icon={StrikethroughIcon} label="Gennemstreget" />
          <ToolbarIcon icon={UnderlineIcon} label="Understreget" />
          <ToolbarIcon icon={HighlighterIcon} label="Overstregningstusch" />
          <Divider />
          <ToolbarDropdown
            icon={<LinkIcon className="w-4 h-4" />}
            label="Link"
          />
          <ToolbarDropdown
            icon={<PenIcon className="w-4 h-4" />}
            label="Tegn"
          />
          <ToolbarIcon icon={PaperclipIcon} label="Vedhæft fil" />
          <ToolbarIcon icon={TableIcon} label="Indsæt tabel" />
          <ToolbarIcon icon={CheckCircleIcon} label="Tjekliste" />
          <ToolbarDropdown
            icon={<CommentPlusIcon className="w-4 h-4" />}
            label="Kommentér"
          />
          <Divider />
          <ToolbarDropdown
            icon={<FontIcon className="w-4 h-4" />}
            label="Skrifttype"
          />
          <ToolbarDropdown
            icon={<ListIcon className="w-4 h-4" />}
            label="Liste"
          />
          <ToolbarDropdown
            icon={<IndentIcon className="w-4 h-4" />}
            label="Indrykning"
          />
          <ToolbarDropdown
            icon={<PaletteIcon className="w-4 h-4" />}
            text="A"
            label="Tekstfarve"
          />
          <ToolbarIcon icon={SparkleIcon} label="Flere stilarter" />
          <div className="flex-1" />
          <ToolbarIcon icon={ExpandIcon} label="Fuld bredde" />
        </div>

        {/* Note-side */}
        <div className="flex-1 overflow-y-auto bg-[#ebe8e8] px-6 py-10 flex justify-center">
          <div className="w-full max-w-[650px] min-h-[850px] bg-white rounded-sm shadow-sm" />
        </div>
      </main>
    </div>
  );
}
