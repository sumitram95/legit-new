<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class KoshiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $districts = [
            [
                "id" => Str::uuid(),
                "name_en" => "Taplejung",
                "name_np" => "ताप्लेजुङ",
                "province_label" => "p1",
                "label" => "dis1"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Panchthar",
                "name_np" => "पाँचथर",
                "province_label" => "p1",
                "label" => "dis2"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ilam",
                "name_np" => "ईलाम",
                "province_label" => "p1",
                "label" => "dis3"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jhapa",
                "name_np" => "झापा",
                "province_label" => "p1",
                "label" => "dis4"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Morang",
                "name_np" => "मोरङ",
                "province_label" => "p1",
                "label" => "dis5"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sunsari",
                "name_np" => "सुनसरी",
                "province_label" => "p1",
                "label" => "dis6"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhankuta",
                "name_np" => "धनकुटा",
                "province_label" => "p1",
                "label" => "dis7"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tehrathum",
                "name_np" => "तेह्रथुम",
                "province_label" => "p1",
                "label" => "dis8"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sankhuwasabha",
                "name_np" => "संखुवासभा",
                "province_label" => "p1",
                "label" => "dis9"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhojpur",
                "name_np" => "भोजपुर",
                "province_label" => "p1",
                "label" => "dis10"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Solukhumbu",
                "name_np" => "सोलुखुम्बु",
                "province_label" => "p1",
                "label" => "dis11"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Okhaldhunga",
                "name_np" => "ओखलढुङगा",
                "province_label" => "p1",
                "label" => "dis12"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khotang",
                "name_np" => "खोटाङ",
                "province_label" => "p1",
                "label" => "dis13"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Udayapur",
                "name_np" => "उदयपुर",
                "province_label" => "p1",
                "label" => "dis14"
            ],
        ];

        DB::table('districts')->insert($districts);
    }
}
