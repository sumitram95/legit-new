<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SudurpashchimSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $districts = [
            // Districts of Sudurpashchim Province
            [
                "id" => Str::uuid(),
                "name_en" => "Bajura",
                "name_np" => "बाजुरा",
                "province_label" => "p7",
                "label" => "dis67",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bajhang",
                "name_np" => "बझाङ",
                "province_label" => "p7",
                "label" => "dis68",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Achham",
                "name_np" => "अछाम",
                "province_label" => "p7",
                "label" => "dis69",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Doti",
                "name_np" => "डोटी",
                "province_label" => "p7",
                "label" => "dis70",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kailali",
                "name_np" => "कैलाली",
                "province_label" => "p7",
                "label" => "dis71",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kanchanpur",
                "name_np" => "कञ्चनपुर",
                "province_label" => "p7",
                "label" => "dis72",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dadeldhura",
                "name_np" => "डडेल्धुरा",
                "province_label" => "p7",
                "label" => "dis73",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Baitadi",
                "name_np" => "बैतडी",
                "province_label" => "p7",
                "label" => "dis74",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Darchula",
                "name_np" => "दार्चुला",
                "province_label" => "p7",
                "label" => "dis75",
            ],
        ];

        DB::table('districts')->insert($districts);
    }
}
