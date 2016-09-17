<?php

use Phinx\Seed\AbstractSeed;

class DbSeeder extends AbstractSeed
{
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeders is available here:
     * http://docs.phinx.org/en/latest/seeding.html
     */
    public function run()
    {
        $data = array(
            [
                'nome' => 'XV SBGames - Simpósio Brasileiro de Games e Entretenimento Digital',
                'data_inicio' => '2016-09-08',
                'data_termino' => '2016-09-10',
                'site_url' => 'http://www.sbgames.org/sbgames2016',
                'estado' => 'São Paulo',
                'cidade' => 'São Paulo',
                'descricao' => "<p>O SBGames é o maior evento acadêmico da América Latina na área de Jogos e Entretenimento Digital. Realizado pela Sociedade Brasileira de Computação, o evento reúne pesquisadores, estudantes e empresários que tem os jogos eletrônicos como objeto de investigação e produto de desenvolvimento. Anualmente são recebidos cerca de mil participantes de diferentes regiões do Brasil e de países como Peru, Argentina, Uruguai, Estados Unidos, Inglaterra, Portugal, dentre outros. Nos últimos 3 anos o SBGames foi realizado em Teresina (2015), Porto Alegre (2014) e São Paulo (2013).</p>
<p>No seu formato atual, o SBGames é composto de quatro trilhas (Computação, Artes e Design, Indústria, Cultura), além do Festival de Jogos, Mostra de Arte e Tutoriais. As trilhas apresentam artigos e pôsteres, sendo que a trilha da Indústria também inclui painéis e palestras. O Festival de Jogos apresenta protótipos e jogos completos em uma sessão informal dedicada a inovação, técnica, imaginação e emergência de novos talentos. A Mostra de Arte apresenta produções criadas para jogos ou relacionadas a eles. Os tutoriais são apresentações de especialistas da área sobre temas variados.</p>
<p>Em 2016, comemoramos 15 anos de SBGames e além das atividades acima mencionadas, serão realizados um workshop de trabalhos de graduação, um workshop de teses e dissertações, um workshop de jogos para saúde e a segunda edição do SBGames Kids & Teens.</p>
<p>O SBGames 2016 acontece nos dias 8 a 10 de Setembro, na Escola Politécnica da Universidade de São Paulo.</p>"
            ],
            [
                'nome' => 'ENCOINFO 2016 - Congresso de Computação e Sistemas de Informação',
                'data_inicio' => '2016-05-09',
                'data_termino' => '2016-05-12',
                'site_url' => 'http://ulbra-to.br/encoinfo',
                'estado' => 'Tocantins',
                'cidade' => 'Palmas',
                'descricao' => "<p>O Congresso de Computação e Sistemas de Informação (ENCOINFO) estabeleceu-se como o maior evento da área da região, indo agora para sua 18ª edição. Desde 1999 o Encoinfo propicia aos acadêmicos, pesquisadores e profissionais de Computação do estado do Tocantins e Região a oportunidade de se atualizarem com novos conceitos e inovações tecnológicas. Proporciona ainda a pesquisadores de todo o país a possibilidade de publicarem e apresentarem seus trabalhos. Vale ressaltar que, no estado do Tocantins, este é o evento de maior longevidade que conta com Anais com trabalhos completos e com Comitê Técnico-Científico totalmente composto avaliadores ad hoc externos ao estado.</p>
<p>Pelo Encoinfo já passaram como participantes, colaboradores e apresentadores de trabalhos muitos acadêmicos das instituições locais que, posteriormente, retornaram ao evento como palestrantes, orientadores de trabalhos e organizadores. Muitos, hoje, são professores renomados em suas instituições, que não se limitam somente ao estado do Tocantins. Hoje, os outrora alunos que participaram como ouvintes do Encoinfo são professores na Universidade Federal de Goiás, na Universidade Federal do Tocantins, no Centro Universitário Luterano de Palmas, no Instituto Federal do Tocantins, dentre outras instituições.</p>
<p>A passagem pelo Encoinfo abriu também as portas para que muitos entrassem em respeitados programas de pós-graduação pelo país e no exterior, como Unicamp, UnB, USP, UFPE, UFC, UFSC, UFG e recentemente na UCLA, nos Estados Unidos.</p>
<p>Dezessete anos de um evento que cresce junto com um estado novo porém em franco desenvolvimento permitem prever que dos próximos anos pode-se esperar muito do Encoinfo. Até mesmo porque os que aqui fizeram sua história costumam retornar para ajudar outros a crescer e construir suas próprias belas histórias.</p>"
            ],
            [
                'nome' => 'VII CBSoft - Congresso Brasileiro de Software: Teoria e Prática',
                'data_inicio' => '2016-09-19',
                'data_termino' => '2016-09-23',
                'site_url' => 'http://cbsoft.org',
                'estado' => 'Paraná',
                'cidade' => 'Maringá',
                'descricao' => "<p>O Congresso Brasileiro de Software: Teoria e Prática (CBSoft) é um dos principais eventos realizado anualmente pela Sociedade Brasileira de Computação (SBC), com a intenção de promover e incentivar a troca de experiências entre as comunidades científica, acadêmica e profissional sobre as mais recentes pesquisas, tendências e inovações - práticas e teóricas - na área de software.</p>
<p>Além dos Minicursos, Tutoriais e Workshops, a programação do CBSoft integra quatro eventos tradicionais organizados pela comunidade brasileira de desenvolvimento de software:</p>
<ul>
<li>XXX Simpósio Brasileiro de Engenharia de Software (SBES 2016)</li>
<li>XX Simpósio Brasileiro de Linguagens de Programação (SBLP 2016)</li>
<li>X Simpósio Brasileiro de Componentes, Arquiteturas e Reutilização de Software (SBCARS 2016)</li>
<li>I Simpósio Brasileiro de Teste de Software Sistemático e Automatizado (SAST 2016)</li>
</ul>
<p>Sejam muito bem-vindos!</p>
<p>Esperamos todos em Maringá, entre os dias 19 e 23 de setembro de 2016!</p>"
            ]
        );

        $eventos = $this->table('eventos');
        $eventos->insert($data)
            ->save();
    }
}
