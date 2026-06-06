"use client";

import { useState, useId } from "react";
import type { Post, ContentBlock } from "@/lib/posts";

type BlockType = ContentBlock["type"];

const BLOCK_LABELS: Record<BlockType, string> = {
  p: "Paragraph",
  h2: "Heading 2",
  h3: "Heading 3",
  quote: "Quote",
  list: "List",
};

function emptyBlock(type: BlockType): ContentBlock {
  if (type === "list") return { type: "list", items: [""] };
  if (type === "quote") return { type: "quote", text: "" };
  return { type, text: "" } as ContentBlock;
}

function BlockEditor({
  block,
  index,
  onChange,
  onRemove,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}: {
  block: ContentBlock;
  index: number;
  onChange: (b: ContentBlock) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const uid = useId();

  const sharedTextarea =
    "w-full bg-navy border border-linen/[0.1] text-linen/80 text-[0.85rem] leading-relaxed px-3 py-2.5 resize-none focus:outline-none focus:border-amber/40 transition-colors placeholder:text-linen/20";

  return (
    <div className="border border-linen/[0.08] bg-linen/[0.02] p-4 rounded-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <select
            value={block.type}
            onChange={(e) => onChange(emptyBlock(e.target.value as BlockType))}
            className="bg-navy border border-linen/[0.1] text-linen/70 text-[0.72rem] tracking-[0.1em] uppercase px-2 py-1 focus:outline-none focus:border-amber/40"
          >
            {(Object.keys(BLOCK_LABELS) as BlockType[]).map((t) => (
              <option key={t} value={t}>
                {BLOCK_LABELS[t]}
              </option>
            ))}
          </select>
          <span className="text-[0.65rem] text-linen/25">#{index + 1}</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onMoveUp}
            disabled={isFirst}
            className="px-2 py-1 text-[0.72rem] text-linen/40 hover:text-linen/80 disabled:opacity-20 transition-colors"
            title="Move up"
          >
            ↑
          </button>
          <button
            type="button"
            onClick={onMoveDown}
            disabled={isLast}
            className="px-2 py-1 text-[0.72rem] text-linen/40 hover:text-linen/80 disabled:opacity-20 transition-colors"
            title="Move down"
          >
            ↓
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="px-2 py-1 text-[0.72rem] text-linen/40 hover:text-red-400 transition-colors ml-1"
            title="Remove block"
          >
            ✕
          </button>
        </div>
      </div>

      {block.type === "list" ? (
        <div className="flex flex-col gap-2">
          {block.items.map((item, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={item}
                onChange={(e) => {
                  const items = [...block.items];
                  items[i] = e.target.value;
                  onChange({ type: "list", items });
                }}
                placeholder={`Item ${i + 1}`}
                className="flex-1 bg-navy border border-linen/[0.1] text-linen/80 text-[0.85rem] px-3 py-2 focus:outline-none focus:border-amber/40 transition-colors placeholder:text-linen/20"
              />
              <button
                type="button"
                onClick={() => {
                  const items = block.items.filter((_, j) => j !== i);
                  onChange({ type: "list", items: items.length ? items : [""] });
                }}
                className="px-2 text-linen/30 hover:text-red-400 transition-colors text-[0.75rem]"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              onChange({ type: "list", items: [...block.items, ""] })
            }
            className="self-start text-[0.68rem] tracking-[0.14em] uppercase text-amber/60 hover:text-amber transition-colors mt-1"
          >
            + Add item
          </button>
        </div>
      ) : block.type === "quote" ? (
        <div className="flex flex-col gap-2">
          <textarea
            id={uid + "-text"}
            rows={3}
            value={block.text}
            onChange={(e) =>
              onChange({ type: "quote", text: e.target.value, attribution: block.attribution })
            }
            placeholder="Quote text…"
            className={sharedTextarea}
          />
          <input
            value={block.attribution ?? ""}
            onChange={(e) =>
              onChange({ type: "quote", text: block.text, attribution: e.target.value || undefined })
            }
            placeholder="Attribution (optional)"
            className="bg-navy border border-linen/[0.1] text-linen/80 text-[0.85rem] px-3 py-2 focus:outline-none focus:border-amber/40 transition-colors placeholder:text-linen/20"
          />
        </div>
      ) : (
        <textarea
          id={uid + "-text"}
          rows={block.type === "p" ? 4 : 2}
          value={block.text}
          onChange={(e) =>
            onChange({ ...block, text: e.target.value } as ContentBlock)
          }
          placeholder={`${BLOCK_LABELS[block.type]} text…`}
          className={sharedTextarea}
        />
      )}
    </div>
  );
}

type Props = {
  post?: Post;
  action: (formData: FormData) => void | Promise<void>;
  submitLabel?: string;
};

export default function PostForm({ post, action, submitLabel = "Save Post" }: Props) {
  const [blocks, setBlocks] = useState<ContentBlock[]>(post?.content ?? []);

  function updateBlock(i: number, b: ContentBlock) {
    setBlocks((prev) => prev.map((x, j) => (j === i ? b : x)));
  }

  function removeBlock(i: number) {
    setBlocks((prev) => prev.filter((_, j) => j !== i));
  }

  function moveBlock(i: number, dir: -1 | 1) {
    setBlocks((prev) => {
      const next = [...prev];
      const target = i + dir;
      if (target < 0 || target >= next.length) return prev;
      [next[i], next[target]] = [next[target], next[i]];
      return next;
    });
  }

  function addBlock(type: BlockType) {
    setBlocks((prev) => [...prev, emptyBlock(type)]);
  }

  const inputCls =
    "w-full bg-navy border border-linen/[0.1] text-linen/80 text-[0.85rem] px-3 py-2.5 focus:outline-none focus:border-amber/40 transition-colors placeholder:text-linen/20";
  const labelCls =
    "block text-[0.68rem] tracking-[0.16em] uppercase text-linen/40 mb-1.5";

  return (
    <form
      action={action}
      className="flex flex-col gap-6"
    >
      {/* Hidden serialised blocks */}
      <input type="hidden" name="content" value={JSON.stringify(blocks)} />

      {/* Metadata grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className={labelCls}>Title</label>
          <input
            name="title"
            defaultValue={post?.title}
            required
            placeholder="Post title"
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls}>Slug</label>
          <input
            name="slug"
            defaultValue={post?.slug}
            required={!post}
            readOnly={!!post}
            placeholder="post-slug"
            className={[inputCls, post ? "opacity-50 cursor-not-allowed" : ""].join(" ")}
          />
          {post && (
            <p className="text-[0.65rem] text-linen/25 mt-1">Slug cannot be changed after creation.</p>
          )}
        </div>

        <div>
          <label className={labelCls}>Category</label>
          <input
            name="category"
            defaultValue={post?.category}
            required
            placeholder="e.g. Organisational Design"
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls}>Date</label>
          <input
            name="date"
            defaultValue={post?.date}
            required
            placeholder="e.g. 12 May 2026"
            className={inputCls}
          />
        </div>

        <div>
          <label className={labelCls}>Read Time (minutes)</label>
          <input
            name="readTime"
            type="number"
            min={1}
            defaultValue={post?.readTime ?? 5}
            required
            className={inputCls}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelCls}>Excerpt</label>
          <textarea
            name="excerpt"
            rows={3}
            defaultValue={post?.excerpt}
            required
            placeholder="Short summary shown in listings…"
            className={[inputCls, "resize-none"].join(" ")}
          />
        </div>
      </div>

      {/* Content blocks */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className={labelCls}>Content Blocks</p>
          <span className="text-[0.65rem] text-linen/25">{blocks.length} block{blocks.length !== 1 ? "s" : ""}</span>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          {blocks.map((block, i) => (
            <BlockEditor
              key={i}
              block={block}
              index={i}
              onChange={(b) => updateBlock(i, b)}
              onRemove={() => removeBlock(i)}
              onMoveUp={() => moveBlock(i, -1)}
              onMoveDown={() => moveBlock(i, 1)}
              isFirst={i === 0}
              isLast={i === blocks.length - 1}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {(Object.keys(BLOCK_LABELS) as BlockType[]).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => addBlock(type)}
              className="text-[0.68rem] tracking-[0.12em] uppercase border border-linen/[0.12] text-linen/45 hover:border-amber/40 hover:text-amber px-3 py-1.5 transition-all duration-150"
            >
              + {BLOCK_LABELS[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4 pt-2 border-t border-linen/[0.06]">
        <button
          type="submit"
          className="text-[0.72rem] tracking-[0.16em] uppercase bg-amber text-navy px-6 py-3 hover:bg-amber/90 transition-colors font-[400]"
        >
          {submitLabel}
        </button>
        <a
          href="/admin/blog"
          className="text-[0.72rem] tracking-[0.14em] uppercase text-linen/35 hover:text-linen/60 transition-colors no-underline"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
