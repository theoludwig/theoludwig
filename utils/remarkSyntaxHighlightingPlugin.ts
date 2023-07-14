import type { Plugin, Transformer } from 'unified'
import type { Literal, Node } from 'unist'
import { visit } from 'unist-util-visit'
import type { Highlighter } from 'shiki'

export interface RemarkSyntaxHighlightingPluginOptions {
  highlighter: Highlighter
}

export interface RemarkSyntaxHighlightingNode extends Node {
  lang: string
  meta: string
  children: undefined
  value: string
  data: Record<string, unknown>
}

export const remarkSyntaxHighlightingPlugin: Plugin<
  [RemarkSyntaxHighlightingPluginOptions],
  Literal
> = (options) => {
  const transformer: Transformer<RemarkSyntaxHighlightingNode> = (tree) => {
    visit<RemarkSyntaxHighlightingNode, string>(tree, 'code', (node) => {
      node.type = 'html'
      node.children = undefined
      node.value = options.highlighter.codeToHtml(node.value, {
        lang: node.lang
      })
    })
  }
  return transformer
}
