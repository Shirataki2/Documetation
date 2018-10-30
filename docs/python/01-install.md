# 環境構築

Pythonの環境を作るにあたり以下のような選択肢があります．

* OSは何か？
    * Windows
    * MacOS
    * Linux
* 仮想環境を使うか否か
    * 使わない！
    * 使う！(venv)
    * 使う！(Anaconda)

それぞれについて解説していきましょう．

## どのOSを使うべきか

Pythonはマルチプラットフォームであるため主要のOSならば動かすことが可能です．しかしながら，やはりOSごとの得手不得手があることは確かです．
欲を言えばLinux上で動かすことが最も簡単ですがなかなかそうもいかないことでしょう．

!!! Tip
    そうもいかなくもないかもしれません．

    [Windows Subsystem for Linux](https://docs.microsoft.com/ja-jp/windows/wsl/about)(WSL)を使うことで仮想のLinux環境を構築すれば手元のWindowsでLinux環境を操作することが可能となります．

    WSLを使う場合の環境構築については[WSL (Windows Subsystem for Linux)+UbuntuでpythonとC/C++の環境構築する超入門](https://akituki.hatenablog.com/entry/2018/06/23/200000)が詳しいです．