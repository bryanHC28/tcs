<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Areas extends Model
{
    use HasFactory;

    /**
     * Conexión a utilizar
     *
     * @var string
     */
    protected $connection = 'tickets';

    /**
     * Nombre de la tabla a utilizar.
     *
     * @var string
     */
    protected $table = 'areas';

    /**
     * Llave primaria a utilizar.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Los atributos que son asignables en masa.
     *
     * @var array<int, string>
     */
    protected $guarded = [];
}
