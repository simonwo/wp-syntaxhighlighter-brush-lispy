/* Highlighter for Lisp */
/*
 * This was pulled from https://github.com/knuthaug/sh-lisp.
 * 
 * TODO: Integrate knuthaug's symbol extraction script into 'build' process
 * 
 * */
SyntaxHighlighter.brushes.Lisp = function ()
{
    var funcs     = 'lambda list progn mapcar car cdr reverse member append format';
    var keywords  = 'let while unless cond if eq t nil defvar dotimes setf listp numberp not equal';
    var macros    = 'loop when dolist dotimes defun';
    var operators = '> < \+ - = \* / %';

    var booleans  = '#t #f'
    var scheme_keywords = 'set! case quote quasiquote lambda if set! cond case and or not ' +
    'let let\* letrec let-syntax letrec-syntax begin do'

    var scheme_core_functions = "delay eqv\\? eq\\? equal\\? number\\? complex\\? real\\? rational\\? integer\\? exact\\? inexact\\? = < > <= >= zero\\? " +
    "positive\\? negative\\? odd\\? even\\? max min \\+ \\* - / abs quotient remainder modulo gcd lcm numerator denominator floor ceiling " +
    "truncate round rationalize exp log sin cos tan asin acos atan atan sqrt expt make-rectangular make-polar real-part " +
    "imag-part magnitude angle exact->inexact inexact->exact number->string number->string string->number string->number boolean " +
    "pair\\? cons car cdr set-car! set-cdr! caar cadr cdar cddr caaar caadr cadar caddr cdaar cdadr cddar cdddr caaaar caaadr caada " +
    "caaddr cadaar cadadr caddar cadddr cdaaar cdaadr cdadar cdaddr cddaar cddadr cdddar cddddr null\\? list\\? list length append " +
    "reverse list-tail list-ref memq memv member assq assv assoc symbol\\? symbol->string string->symbol char\\? char=\\? char<\\? char>\\? " +
    "char<=\\? char>=\\? char-ci=\\? char-ci<\\? char-ci>\\? char-ci<=\\? char-ci>=\\? char-alphabetic\\? char-numeric\\? char-whitespace\\? " +
    "char-upper-case\\? char-lower-case\\? char->integer integer->char char-upcase char-downcase string\\? make-string make-string " +
    "string string-length string-ref string-set! string=\\? string-ci=\\? string<\\? string>\\? string<=\\? string>=\\? string-ci<\\? " +
    "string-ci>\\? string-ci<=\\? string-ci>=\\? substring string-append string->list list->string string-copy string-fill! " +
    "vector\\? make-vector make-vector vector vector-length vector-ref vector-set! vector->list list->vector vector-fill! " +
    "procedure\\? apply map for-each force call-with-current-continuation values call-with-values dynamic-wind eval " +
    "scheme-report-environment null-environment interaction-environment call-with-input-file call-with-output-file " +
    "input-port\\? output-port\\? current-input-port current-output-port with-input-from-file with-output-to-file open-input-file " +
    "open-output-file close-input-port close-output-port read read read-char read-char peek-char peek-char eof-object " +
    "char-ready\\? char-ready\\? write write display display newline newline write-char write-char load transcript-on transcript-off"
     
    var scheme_srfi_1 = "xcons cons\\* make-list list-tabulate list-copy circular-list iota proper-list\\? circular-list\\? dotted-list\\? " +
    "null-list\\? not-pair\\? list= first second third fourth fifth sixth seventh eighth ninth tenth car\\+cdr take drop take-right " +
    "drop-right take! drop-right! split-at split-at! last last-pair length\\+ append! concatenate concatenate! reverse! append-revers " +
    "append-reverse! zip unzip1 unzip2 unzip3 unzip4 unzip5 count fold fold-right pair-fold pair-fold-right reduce reduce-right " +
    "unfold unfold-right map for-each append-map append-map! map! map-in-order pair-for-each filter-map filter partition remove " +
    "filter! partition! remove! find find-tail take-while take-while! drop-while span span! break break! any every list-index " +
    "member delete delete! delete-duplicates delete-duplicates! assoc alist-cons alist-copy alist-delete alist-delete! lset<= " +
    "lset= lset-adjoin lset-union lset-intersection lset-difference lset-xor lset-diff\\+intersection lset-union! lset-intersection! " +
    "lset-difference! lset-xor! lset-diff\\+intersection!"
    
    this.regexList = [
     { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },
     { regex: new RegExp('&\\w+;', 'g'), css: 'plain' },
     { regex: new RegExp(';.*', 'g'), css: 'comments' },
     { regex: new RegExp("'(\\w|-)+", 'g'), css: 'variable' },
     { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
     { regex: new RegExp(this.getKeywords(macros), 'gm'), css: 'keyword' },
     { regex: new RegExp(this.getKeywords(funcs), 'gm'), css: 'functions' },
     { regex: new RegExp(this.getKeywords(booleans), 'gm'), css: 'constants' },
     { regex: new RegExp(this.getKeywords(scheme_keywords), 'gm'), css: 'keyword' },
     { regex: new RegExp(this.getKeywords(scheme_core_functions), 'gm'), css: 'functions' },
     { regex: new RegExp(this.getKeywords(scheme_srfi_1), 'gm'), css: 'functions' }
    ];
};
    
SyntaxHighlighter.brushes.Lisp.prototype = new SyntaxHighlighter.Highlighter ();
SyntaxHighlighter.brushes.Lisp.aliases = ['lisp', 'clisp', 'elisp', 'emacs-lisp','clojure', 'scheme'];
