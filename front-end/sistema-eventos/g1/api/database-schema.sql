-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sistema_eventos
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.10-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eventos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(128) NOT NULL,
  `estado` varchar(48) DEFAULT NULL,
  `cidade` varchar(64) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `site_url` varchar(255) DEFAULT NULL,
  `descricao` text,
  `data_inicio` date DEFAULT NULL,
  `data_termino` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome_UNIQUE` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
INSERT INTO `eventos` VALUES (11,'XV SBGames - Simpósio Brasileiro de Games e Entretenimento Digital','São Paulo','São Paulo','2016-09-09 03:13:35',NULL,'http://www.sbgames.org/sbgames2016','<p>O SBGames é o maior evento acadêmico da América Latina na área de Jogos e Entretenimento Digital. Realizado pela Sociedade Brasileira de Computação, o evento reúne pesquisadores, estudantes e empresários que tem os jogos eletrônicos como objeto de investigação e produto de desenvolvimento. Anualmente são recebidos cerca de mil participantes de diferentes regiões do Brasil e de países como Peru, Argentina, Uruguai, Estados Unidos, Inglaterra, Portugal, dentre outros. Nos últimos 3 anos o SBGames foi realizado em Teresina (2015), Porto Alegre (2014) e São Paulo (2013).</p>\n<p>No seu formato atual, o SBGames é composto de quatro trilhas (Computação, Artes e Design, Indústria, Cultura), além do Festival de Jogos, Mostra de Arte e Tutoriais. As trilhas apresentam artigos e pôsteres, sendo que a trilha da Indústria também inclui painéis e palestras. O Festival de Jogos apresenta protótipos e jogos completos em uma sessão informal dedicada a inovação, técnica, imaginação e emergência de novos talentos. A Mostra de Arte apresenta produções criadas para jogos ou relacionadas a eles. Os tutoriais são apresentações de especialistas da área sobre temas variados.</p>\n<p>Em 2016, comemoramos 15 anos de SBGames e além das atividades acima mencionadas, serão realizados um workshop de trabalhos de graduação, um workshop de teses e dissertações, um workshop de jogos para saúde e a segunda edição do SBGames Kids & Teens.</p>\n<p>O SBGames 2016 acontece nos dias 8 a 10 de Setembro, na Escola Politécnica da Universidade de São Paulo.</p>','2016-09-08','2016-09-10'),(12,'ENCOINFO 2016 - Congresso de Computação e Sistemas de Informação','Tocantins','Palmas','2016-09-09 03:13:35',NULL,'http://ulbra-to.br/encoinfo','<p>O Congresso de Computação e Sistemas de Informação (ENCOINFO) estabeleceu-se como o maior evento da área da região, indo agora para sua 18ª edição. Desde 1999 o Encoinfo propicia aos acadêmicos, pesquisadores e profissionais de Computação do estado do Tocantins e Região a oportunidade de se atualizarem com novos conceitos e inovações tecnológicas. Proporciona ainda a pesquisadores de todo o país a possibilidade de publicarem e apresentarem seus trabalhos. Vale ressaltar que, no estado do Tocantins, este é o evento de maior longevidade que conta com Anais com trabalhos completos e com Comitê Técnico-Científico totalmente composto avaliadores ad hoc externos ao estado.</p>\n<p>Pelo Encoinfo já passaram como participantes, colaboradores e apresentadores de trabalhos muitos acadêmicos das instituições locais que, posteriormente, retornaram ao evento como palestrantes, orientadores de trabalhos e organizadores. Muitos, hoje, são professores renomados em suas instituições, que não se limitam somente ao estado do Tocantins. Hoje, os outrora alunos que participaram como ouvintes do Encoinfo são professores na Universidade Federal de Goiás, na Universidade Federal do Tocantins, no Centro Universitário Luterano de Palmas, no Instituto Federal do Tocantins, dentre outras instituições.</p>\n<p>A passagem pelo Encoinfo abriu também as portas para que muitos entrassem em respeitados programas de pós-graduação pelo país e no exterior, como Unicamp, UnB, USP, UFPE, UFC, UFSC, UFG e recentemente na UCLA, nos Estados Unidos.</p>\n<p>Dezessete anos de um evento que cresce junto com um estado novo porém em franco desenvolvimento permitem prever que dos próximos anos pode-se esperar muito do Encoinfo. Até mesmo porque os que aqui fizeram sua história costumam retornar para ajudar outros a crescer e construir suas próprias belas histórias.</p>','2016-05-09','2016-05-12'),(13,'VII CBSoft - Congresso Brasileiro de Software: Teoria e Prática','Paraná','Maringá','2016-09-09 03:13:35',NULL,'http://cbsoft.org','<p>O Congresso Brasileiro de Software: Teoria e Prática (CBSoft) é um dos principais eventos realizado anualmente pela Sociedade Brasileira de Computação (SBC), com a intenção de promover e incentivar a troca de experiências entre as comunidades científica, acadêmica e profissional sobre as mais recentes pesquisas, tendências e inovações - práticas e teóricas - na área de software.</p>\n<p>Além dos Minicursos, Tutoriais e Workshops, a programação do CBSoft integra quatro eventos tradicionais organizados pela comunidade brasileira de desenvolvimento de software:</p>\n<ul>\n<li>XXX Simpósio Brasileiro de Engenharia de Software (SBES 2016)</li>\n<li>XX Simpósio Brasileiro de Linguagens de Programação (SBLP 2016)</li>\n<li>X Simpósio Brasileiro de Componentes, Arquiteturas e Reutilização de Software (SBCARS 2016)</li>\n<li>I Simpósio Brasileiro de Teste de Software Sistemático e Automatizado (SAST 2016)</li>\n</ul>\n<p>Sejam muito bem-vindos!</p>\n<p>Esperamos todos em Maringá, entre os dias 19 e 23 de setembro de 2016!</p>','2016-09-19','2016-09-23');
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `newsletter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(128) DEFAULT NULL,
  `email` varchar(128) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newsletter`
--

LOCK TABLES `newsletter` WRITE;
/*!40000 ALTER TABLE `newsletter` DISABLE KEYS */;
/*!40000 ALTER TABLE `newsletter` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-19 19:38:15
