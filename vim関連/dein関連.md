
[公式ページ](https://github.com/Shougo/dein.vim)だとインストールした後に`.vimrc`に以下のように書けよと言われる

```vim
if &compatible
  set nocompatible
endif
" Add the dein installation directory into runtimepath
set runtimepath+=~/.cache/dein/repos/github.com/Shougo/dein.vim

if dein#load_state('~/.cache/dein')
  call dein#begin('~/.cache/dein')

  call dein#add('~/.cache/dein/repos/github.com/shougo/dein.vim')
  call dein#add('shougo/deoplete.nvim')
  if !has('nvim')
    call dein#add('roxma/nvim-yarp')
    call dein#add('roxma/vim-hug-neovim-rpc')
  endif

  call dein#end()
  call dein#save_state()
endif

filetype plugin indent on
syntax enable
```

# コード解説

```vim
if &compatible
  set nocompatible
endif
```

`set compatible`はvi互換動作を無効にするコマンド

**現在は不要のよう。**

```vim
"Add the dein installation directory into runtimepath
set runtimepath+=~/.cache/dein/repos/github.com/Shougo/dein.vim
```
deinインストールディレクトリをruntimeparhに追加する
といっているが、
`runtimepath`というのはvimの設定ファイルやプラグインがしまわれているディレクトリのパスが記されている文字列。
そこにdeinのインストールディレクトリを追加しています。と行っている
以降のコードはコード中に解説

```vim
"設定開始
if dein#load_state('~/.cache/dein')
  call dein#begin('~/.cache/dein')
  "追加したいプラグインを羅列
  call dein#add('~/.cache/dein/repos/github.com/shougo/dein.vim')
  call dein#add('shougo/deoplete.nvim')
  "nvimがあれば以下を追加
  if !has('nvim')
    call dein#add('roxma/nvim-yarp')
    call dein#add('roxma/vim-hug-neovim-rpc')
  endif

  call dein#end()
  call dein#save_state()
endif
```
