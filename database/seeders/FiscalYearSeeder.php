<?php

namespace Database\Seeders;

use App\Models\FiscalYear;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FiscalYearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $fys = [
            ['id' => Str::uuid(), 'fy_name' => '080/81'],
            ['id' => Str::uuid(), 'fy_name' => '079/80'],
            ['id' => Str::uuid(), 'fy_name' => '078/79']
        ];
        DB::table('fiscal_years')->insert($fys);
    }
}
