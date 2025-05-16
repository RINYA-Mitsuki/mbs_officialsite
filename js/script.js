'use strict';
{
  $(function(){
    function switchByWidth() {
      if (window.matchMedia( "(max-width: 768px)" ).matches) {
        //////////// スマホ専用の処理 ////////////

        // 全ページを横並びに展開
        const sections = $('section').toArray();
        const mainFlameWidth = 100;
        const spMainFlameSpace = 10;
        $.each(sections, function(index, section){
          let _mainFlameWidth = mainFlameWidth * index;
          let _spMainFlameSpace = spMainFlameSpace * index;
          $(section).css({
            'transform': `translateX(calc(${_mainFlameWidth}% + ${_spMainFlameSpace}px))`
          });
        });

        // ページ遷移);
        $('.section__box').css({
          'transform': 'translateX(0px)'
        }); // 初期化
        $('.header__nav--icon, .header__logo').on('click', function() {
          $('.section__box').addClass('ease'); // アニメーションを有効にする
          // クリックした要素のクラス名を取得し、2番目のクラス名を取得
          const secondClass = $(this).attr('class').split(' ')[1];
          if (secondClass === 'change__top') {
            // Topをクリックしたときの処理
            $('.section__box').css({
              'transform': 'translateX(0px)'
            });
          } else if (secondClass === 'change__about') {
            // Aboutをクリックしたときの処理
            $('.section__box').css({
              'transform': 'translateX(calc(-100vw + 10px))'
            });
          } else if (secondClass === 'change__works') {
            // Worksをクリックしたときの処理
            $('.section__box').css({
              'transform': 'translateX(calc(-200vw + 20px))'
            });
            // Worksのソート機能を初期化
            worksSortInit();
          } else if (secondClass === 'change__contact') {
            // Contactをクリックしたときの処理
            $('.section__box').css({
              'transform': 'translateX(calc(-300vw + 30px))'
            });
          }
          setTimeout(function() {
            $('.section__box').removeClass('ease');
          }, 1000);
        });

        // ハンバーガーメニュートグル
        const $items = $('.window, .hamburger__line, .header__nav, .header__nav--list, .header__sns--list, .section__blackFade');
        $('.header__hamburger').on('click', function() {
          $('.section__blackFade').hasClass('active') ?
            $items.removeClass('active') :
            $items.addClass('active');
        });
        // ハンバーガーメニューを閉じる
        const closeTrigger = $('.header__nav--icon, .header__logo, main');
        $(closeTrigger).on('click', function() {
          $items.removeClass('active');
        });

        //////////// ここまでスマホ専用の処理 ////////////
      } else {
        //////////// PC専用の処理 ////////////

        // 全ページを横並びに展開
        const sections = $('section').toArray();
        const mainFlameWidth = 100;
        const pcMainFlameSpace = 20;
        $.each(sections, function(index, section){
          let _mainFlameWidth = mainFlameWidth * index;
          let _pcMainFlameSpace = pcMainFlameSpace * index;
          $(section).css({
            'transform': `translateX(calc(${_mainFlameWidth}% + ${_pcMainFlameSpace}px))`
          });
        });

        // ページ遷移
        $('.section__box').css({
          'transform': 'translateX(0px)'
        }); // 初期化
        $('.header__nav--icon, .header__logo').on('click', function() {
          $('.section__box').addClass('ease'); // アニメーションを有効にする
          // クリックした要素のクラス名を取得し、2番目のクラス名を取得
          const secondClass = $(this).attr('class').split(' ')[1];
          if (secondClass === 'change__top') {
            // Topをクリックしたときの処理
            $('.section__box').css({
              'transform': 'translateX(0px)'
            });
          } else if (secondClass === 'change__about') {
            // Aboutをクリックしたときの処理
            $('.section__box').css({
              'transform': 'translateX(calc(-100vw + 130px - 20px))'
            });
          } else if (secondClass === 'change__works') {
            // Worksをクリックしたときの処理
            $('.section__box').css({
              'transform': 'translateX(calc(-200vw + 260px - 40px))'
            });
            // Worksのソート機能を初期化
            worksSortInit();
          } else if (secondClass === 'change__contact') {
            // Contactをクリックしたときの処理
            $('.section__box').css({
              'transform': 'translateX(calc(-300vw + 390px - 60px))'
            });
          }
          setTimeout(function() {
            $('.section__box').removeClass('ease');
          }, 1000);
        });

        // サイドバーマウスホバー時のアニメーション
        $('.header').on('mouseenter', function() {
          let oneClick = false;
          if (oneClick === false) {
            $('.header__logo, .header__nav--list li p, .header__sns--list a:not(:first-child), .header__openNav, .section__blackFade').addClass('active');
          };
          $('.header__nav--icon, .header__logo').on('click', function() {
            oneClick === true;
            $('.header__logo, .header__nav--list li p, .header__sns--list a:not(:first-child), .header__openNav, .section__blackFade').removeClass('active');
          });
        });

        // サイドバーからマウスが外れたときのアニメーション
        $('.header').on('mouseleave', function() {
          $('.header__logo, .header__nav--list li p, .header__sns--list a:not(:first-child), .header__openNav, .section__blackFade').removeClass('active');
        });

        // サイドバーのページ遷移ボタンにマウスホバーした時の処理
        $('.header__nav--icon').on('mouseenter', function() {
          $(this).find('p').addClass('hover');
        });
        $('.header__nav--icon').on('mouseleave', function() {
          $(this).find('p').removeClass('hover');
        });

        // サイドバーのSNSボタンにマウスホバーした時の処理
        $('.header__sns--list a').on('mouseenter', function() {
          $(this).find('.sns__parenthesesBox').addClass('hover');
        });
        $('.header__sns--list a').on('mouseleave', function() {
          $(this).find('.sns__parenthesesBox').removeClass('hover');
        });

        // Top背景パララックス
        const $bg = $('.top__bg div'); // パララックスさせるターゲット取得
        const activeArea = $('#top'); // パララックスを行うエリアの取得
        const xCenter = window.innerWidth / 2; // 中心のX座標
        const yCenter = window.innerHeight / 2; // 中心のY座標
        const parallaxVal = 30; //中心からマウスの距離のn分の1px動く
        // マウスがパララックスエリアに入ったときの処理
        activeArea.on('mousemove', function(e) {
          // マウスの位置を取得
          const mouseX = e.clientX;
          const mouseY = e.clientY;
          // マウスの位置から中心までの距離を取得
          const xVal = (xCenter - mouseX) / parallaxVal;
          const yVal = (yCenter - mouseY) / parallaxVal;
          // 画像の位置を変更
          $bg.css({
            'transform': `translate(${xVal}px, ${yVal}px)`
          });
        });

        // Aboutプロフィール画像のマウスホバーアニメーション
        const $myAvatar = $('.img__myAvatar.hoverOnly');
        $myAvatar.on('mouseenter', function() {
          $(this).addClass('active');
        });
        $('.img__myPhoto').on('mouseenter', function() {
          $myAvatar.removeClass('active');
        });

        // Worksカーソルを合わせた時のアニメーション
        $('.works__item').on('mouseenter', function() {
          const $this = $(this);
          $this.find('.works__item--overlayBg').addClass('active');
          $this.find('.works__item--tagBox').addClass('active');
          $this.find('.parentheses').addClass('active');
        });
        // Worksカーソルを離した時のアニメーション
        $('.works__item').on('mouseleave', function() {
          const $this = $(this);
          $this.find('.works__item--overlayBg').removeClass('active');
          $this.find('.works__item--tagBox').removeClass('active');
          $this.find('.parentheses').removeClass('active');
        });

        // Worksモーダル閉じるボタンホバー時のちょっとしたアニメーション
        $('.close__nav').on('mouseenter', function() {
          const animObject = $('.close__nav, .close__slashBox ,.close__nav .parentheses');
          animObject.addClass('active');
        });
        $('.close__nav').on('mouseleave', function() {
          const animObject = $('.close__nav, .close__slashBox, .close__nav .parentheses');
          animObject.removeClass('active');
        });

        //////////// ここまでPC専用の処理 ////////////
      }
    }
    //ロードとリサイズの両方で同じ処理を実行する
    window.onload = switchByWidth;
    window.onresize = switchByWidth;

    //////////// レスポンシブ関係ない処理 ////////////

    // Top背景スライドショー
    const topSlides = $('.top__bg').find('div');
    let bgCurrent = 0;

    topSlides.eq(bgCurrent).addClass('active moving');

    function showNextSlide() {
      topSlides.eq(bgCurrent).removeClass('active');
      bgCurrent = (bgCurrent + 1) % topSlides.length;
      topSlides.eq(bgCurrent).addClass('active');
      //画面横幅が768px以下のときのみ、画像の自動横スライドを行う
      topSlides.eq(bgCurrent).addClass('moving');
      setTimeout(function() {
        if (bgCurrent === 0) {
          topSlides.eq(topSlides.length - 1).removeClass('moving');
        } else {
          topSlides.eq(bgCurrent - 1).removeClass('moving');
        }
      }, 1000);
    }
    setTimeout(setInterval(showNextSlide, 8000), 4000);


    // Worksスクロールナビゲーション消すやつ
    let scrollTimer; // 負荷軽減用のタイマー
    const $worksBox = $('.works__box');
    $($worksBox).on('scroll', function() {
      if (scrollTimer) return;
      scrollTimer = setTimeout(function() {
        scrollTimer = null;
        const worksBoxOffset = $worksBox.offset().top;
        const scrollPosition = $(window).scrollTop() + $(window).height();
        if (scrollPosition > worksBoxOffset) {
        $('.scroll__nav').addClass('hide');
        }
      }, 1000); // nミリ秒に1回だけ実行
    });

    // Worksモーダル展開
    $('.works__item').on('click', function() {
      const itemNumber = $(this).attr('class').split(' ')[1];
      const targetModal = `.modal__container.${itemNumber}`
      $(`${targetModal}, ${targetModal} .modal__box--links`).toggleClass('active');
    });

    // Worksモーダル格納
    // ヘッダーを弄った時、律儀に閉じるボタンを押した時
    $('header__logo, .header__nav--list li, .close__nav').on('click', function() {
      $('.modal__container.active').removeClass('active');
      stopAllVideos();
    });
    // 背景をクリックした時
    $(document).on('click', '.modal__container.active', function(e) {
      if (!$(e.target).closest('.modal__box').length) {
        $('.modal__container.active').removeClass('active');
        stopAllVideos();
      }
    });

    // Worksのスクロールアニメーション
    function fadeInOutOnScroll() {
      const $container = $('.works__box'); // .works__boxを取得
      const containerHeight = $container.height(); // .works__boxの高さ
      const scrollTop = $container.scrollTop(); // .works__boxのスクロール位置
      const scrollBottom = scrollTop + containerHeight; // スクロール範囲の下端を計算
      console.log(scrollTop, scrollBottom); // デバッグ用にスクロール位置を表示

      $('.works__item').each(function () {
        const $item = $(this); // 各.works__itemを取得
        const itemHeight = $item.outerHeight(); // .works__itemの高さ
        const itemOffsetTop = $item.position().top; // .works__boxを基準とした相対位置の上端
        const itemOffsetBottom = itemOffsetTop + itemHeight; // .works__boxを基準とした相対位置の下端

        // 要素が完全に見切れていない場合
        if (itemOffsetBottom > scrollTop && itemOffsetTop < scrollBottom) {
          const visibleHeight = Math.min(itemOffsetBottom, scrollBottom) - Math.max(itemOffsetTop, scrollTop); // スクロール範囲内の見えている高さを計算
          const visibilityRatio = ( visibleHeight / itemHeight ); // 見えている割合を計算 0~1
          const editRatio = ( ( visibleHeight - itemHeight ) ** 2 / ( itemHeight ** 2 ) * -1 + 10 ) / 10; // 0.9~1の滑らかな変化を計算
          $item.css('opacity', visibilityRatio);
          // 要素が上部にある場合
          if (itemOffsetBottom > scrollTop) {
            $item.css('transform', `translateY(${visibilityRatio * 20}px) scale(${editRatio})`);
          }
          // 要素が下部にある場合
          if (itemOffsetTop < scrollBottom) {
            $item.css('transform', `translateY(-${visibilityRatio * 20}px)  scale(${editRatio})`);
          }
        } else {
          $item.css('opacity', 0);
        }
      });
    };

    $('.works__box').on('scroll resize', fadeInOutOnScroll);
    $(window).on('load', function() {
      fadeInOutOnScroll();
    });

    // Worksソート機能
    $('.works__sort--all').addClass('active');

    $('.works__sort li').on('click', function() {
      const $this = $(this);
      // クリックした要素が既に.activeでない場合
      if (!$this.hasClass('active')) {
        // クリックした項目に応じてクラスを付け外し
        $('.works__sort li').removeClass('active');
        $('.works__item').addClass('hide');
        if ($this.hasClass('works__sort--all')) {
          $('.works__sort--all').addClass('active');
          $('.works__item').removeClass('hide');
        }
        else if
        ($this.hasClass('works__sort--music')) {
          $('.works__sort--music').addClass('active');
          $('.tag__music').removeClass('hide');
        }
        else if
        ($this.hasClass('works__sort--design')) {
          $('.works__sort--design').addClass('active');
          $('.tag__design').removeClass('hide');
        }
        else if
        ($this.hasClass('works__sort--3d')) {
          $('.works__sort--3d').addClass('active');
          $('.tag__3d').removeClass('hide');
        }
        else if
        ($this.hasClass('works__sort--other')) {
          $('.works__sort--other').addClass('active');
          $('.tag__other').removeClass('hide');
        };
        // 一旦全部フェードアウト
        $('.works__item').fadeOut(100);
        setTimeout(function() {
          // スクロール位置をリセット
          $('.works__box').scrollTop(0);
          // opacityとtransformをリセット
          $('.works__item').css({
            'opacity': '',
            'transform': ''
          });
          // .hideが付いていないitemだけフェードイン
          $('.works__item:not(.hide)').fadeIn(200);
        }, 210);
        fadeInOutOnScroll();
      };
    });
    // Worksソート機能初期化
    function worksSortInit() {
      $('.works__sort li').removeClass('active');
      $('.works__sort--all').addClass('active');
      $('.works__item').addClass('hide');
      $('.works__item').removeClass('hide');
      $('.works__item').fadeOut(100);
      setTimeout(function() {
        // スクロール位置をリセット
        $('.works__box').scrollTop(0);
        // opacityとtransformをリセット
        $('.works__item').css({
          'opacity': '',
          'transform': ''
        });
        // .hideが付いていないitemだけフェードイン
        $('.works__item:not(.hide)').fadeIn(200);
      }, 210);
    }

    // Contact料金表展開トグル
    $('.contact__price--title').on('click', function() {
      const openValue = $('.contact__price--table');
      const toggleItems = $('.contact__price, .contact__price--arrow, .contact__price--table, .title__open, .title__close');
      if (openValue.hasClass('active')) {
        toggleItems.removeClass('active');
      } else {
        toggleItems.addClass('active');
      }
    });

    // loadingアニメーション

    // ページ全体の読み込み度合いに応じたローディングバー
    const $loadingBar = $('.loading__bar');
    let totalAssets = 0; // 総アセット数
    let loadedAssets = 0; // 読み込まれたアセット数
    let simulatedProgress = 0; // シミュレーション進捗
    let loadingComplete = false; // アセット読み込み完了フラグ
    let timeElapsed = false; // 4秒経過フラグ

    // 画像やスクリプトなどのアセットをカウント
    $('img, script, link[rel="stylesheet"], iframe').each(function() {
      totalAssets++;
      const asset = $(this);
      const src = asset.attr('src') || asset.attr('href');
      if (src) {
      const img = new Image();
      img.onload = img.onerror = function() {
        loadedAssets++;
        const progress = (loadedAssets / totalAssets) * 100;
        const adjustedProgress = progress * 0.25; // バーの長さを4分の1にする
        $loadingBar.css('width', `${adjustedProgress}%`);
        if (loadedAssets === totalAssets) {
        loadingComplete = true;
        if (timeElapsed) closeLoading(); // 4秒経過後に発火
        }
      };
      img.src = src;
      } else {
      loadedAssets++;
      }
    });
    // 最短4秒で100%になるようにするためのシミュレーション
    const interval = setInterval(function() {
      simulatedProgress += 0.25; // 1秒ごとに0.25%進行
      $loadingBar.css('width', `${simulatedProgress}%`);
      if (simulatedProgress >= 100) {
      clearInterval(interval);
      timeElapsed = true;
      if (loadingComplete) closeLoading(); // 全アセット読み込み後に発火
      }
    }, 10);

    //ロゴのアニメーション
    $(document).ready(function() {
      // 0.25秒後に.loading__logoに.activeを付与
      setTimeout(function() {
        $('.loading__logo').addClass('active');
      }, 250);
      // 0.7秒後に.logo__starに.activeを付与
      setTimeout(function() {
        $('.logo__star, .parenthesesBox').addClass('active');
      }, 750);
      // 1.25秒後にロゴを完全展開
      setTimeout(function() {
        $('.loading__logoBox').addClass('active');
        $('.parenthesesBox').addClass('active2');
      }, 1250);
      // 1.5秒後にローディングバーを表示
      setTimeout(function() {
        $('.loading__bar').addClass('active');
      }, 1500);
    });

    // ローディング完了後の処理
    function closeLoading() {
      // ロゴを非表示にする
      setTimeout(function() {
        $('.loading__logoBox').addClass('close');
      }, 100);
      // その他色々非表示にする
      setTimeout(function() {
        $('.loading__box, .parenthesesBox').addClass('close');
      }, 400);
      // ローディング画面自体を非表示にする
      setTimeout(function() {
        $('.loading').fadeOut(500, function() {
          $(this).remove(); // 完全に削除
        });
      }, 1000);
    }
  });
}