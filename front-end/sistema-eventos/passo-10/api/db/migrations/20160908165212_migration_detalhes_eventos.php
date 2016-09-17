<?php

use Phinx\Migration\AbstractMigration;

class MigrationDetalhesEventos extends AbstractMigration
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $eventos = $this->table('eventos');
        if ($eventos) {
            $eventos
                ->addTimestamps()
                ->addColumn('site_url', 'string', array('limit' => 255, 'null' => true))
                ->addColumn('descricao', 'text', array('null' => true))
                ->addColumn('data_inicio', 'date', array('null' => true))
                ->addColumn('data_termino', 'date', array('null' => true))
                ->update();
        }
    }
}
