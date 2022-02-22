import { Plugin, Transformer } from 'unified'
import { Literal } from 'unist'
import { visit } from 'unist-util-visit'
import { Highlighter } from 'shiki'

export interface RemarkSyntaxHighlightingPluginOptions {
  highlighter: Highlighter
}

export type RemarkSyntaxHighlightingNode = Literal<string> & {
  lang: string
  meta: string
  children: undefined
}

export const remarkSyntaxHighlightingPlugin: Plugin<
  [RemarkSyntaxHighlightingPluginOptions],
  Literal<string, RemarkSyntaxHighlightingNode>
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
