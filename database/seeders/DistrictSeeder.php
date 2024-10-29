<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $districts = [
            // Districts of Koshi Province
            [
                "id" => Str::uuid(),
                "name_en" => "Bhojpur",
                "name_np" => "भोजपुर",
                "province_label" => "p1",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhankuta",
                "name_np" => "ढंकाुटा",
                "province_label" => "p1",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ilam",
                "name_np" => "इलाम",
                "province_label" => "p1",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jhapa",
                "name_np" => "झापा",
                "province_label" => "p1",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khotang",
                "name_np" => "खोटाङ",
                "province_label" => "p1",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Makwanpur",
                "name_np" => "मकवानपुर",
                "province_label" => "p1",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sankhuwasabha",
                "name_np" => "सङ्खुवासभा",
                "province_label" => "p1",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Solukhumbu",
                "name_np" => "सोलुखुम्बु",
                "province_label" => "p1",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tehrathum",
                "name_np" => "तेह्रथुम",
                "province_label" => "p1",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Udayapur",
                "name_np" => "उदयपुर",
                "province_label" => "p1",
            ],

            // Districts of Madhesh Province
            [
                "id" => Str::uuid(),
                "name_en" => "Dhanusha",
                "name_np" => "धनुषा",
                "province_label" => "p2",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahottari",
                "name_np" => "महोत्तरी",
                "province_label" => "p2",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Parsa",
                "name_np" => "परसा",
                "province_label" => "p2",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Saptari",
                "name_np" => "सप्तरी",
                "province_label" => "p2",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sarlahi",
                "name_np" => "सरलाही",
                "province_label" => "p2",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Siraha",
                "name_np" => "सिरहा",
                "province_label" => "p2",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rautahat",
                "name_np" => "रौतहट",
                "province_label" => "p2",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bara",
                "name_np" => "बारा",
                "province_label" => "p2",
            ],

            // Districts of Bagmati Province
            [
                "id" => Str::uuid(),
                "name_en" => "Bhaktapur",
                "name_np" => "भक्तपुर",
                "province_label" => "p3",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chitwan",
                "name_np" => "चितवन",
                "province_label" => "p3",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dolakha",
                "name_np" => "ढोलाखा",
                "province_label" => "p3",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kathmandu",
                "name_np" => "काठमाडौं",
                "province_label" => "p3",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lalitpur",
                "name_np" => "ललितपुर",
                "province_label" => "p3",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Makwanpur",
                "name_np" => "मकवानपुर",
                "province_label" => "p3",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ramechhap",
                "name_np" => "रामेछाप",
                "province_label" => "p3",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sindhuli",
                "name_np" => "सिन्धुली",
                "province_label" => "p3",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sindhupalchowk",
                "name_np" => "सिन्धुपाल्चोक",
                "province_label" => "p3",
            ],

            // Districts of Gandaki Province
            [
                "id" => Str::uuid(),
                "name_en" => "Baglung",
                "name_np" => "बागलुङ",
                "province_label" => "p4",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gorkha",
                "name_np" => "गोरखा",
                "province_label" => "p4",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kaski",
                "name_np" => "कास्की",
                "province_label" => "p4",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Manang",
                "name_np" => "मनाङ",
                "province_label" => "p4",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mustang",
                "name_np" => "मुस्ताङ",
                "province_label" => "p4",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nuwakot",
                "name_np" => "नुवाकोट",
                "province_label" => "p4",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Syangja",
                "name_np" => "स्याङ्जा",
                "province_label" => "p4",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tanahun",
                "name_np" => "तानहुँ",
                "province_label" => "p4",
            ],

            // Districts of Lumbini Province
            [
                "id" => Str::uuid(),
                "name_en" => "Arghakhanchi",
                "name_np" => "अर्घाखाँची",
                "province_label" => "p5",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Banke",
                "name_np" => "बाँके",
                "province_label" => "p5",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bardiya",
                "name_np" => "बर्दिया",
                "province_label" => "p5",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kapilvastu",
                "name_np" => "कपिलवस्तु",
                "province_label" => "p5",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nawalparasi",
                "name_np" => "नवलपरासी",
                "province_label" => "p5",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rupandehi",
                "name_np" => "रुपन्देही",
                "province_label" => "p5",
            ],

            // Districts of Karnali Province
            [
                "id" => Str::uuid(),
                "name_en" => "Dailekh",
                "name_np" => "दैलेख",
                "province_label" => "p6",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dolpa",
                "name_np" => "डोल्पा",
                "province_label" => "p6",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jumla",
                "name_np" => "जुम्ला",
                "province_label" => "p6",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Surkhet",
                "name_np" => "सुर्खेत",
                "province_label" => "p6",
            ],

            // Districts of Sudurpashchim Province
            [
                "id" => Str::uuid(),
                "name_en" => "Doti",
                "name_np" => "डोटी",
                "province_label" => "p7",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kailali",
                "name_np" => "कैलाली",
                "province_label" => "p7",
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kanchanpur",
                "name_np" => "कञ्चनपुर",
                "province_label" => "p7",
            ],
        ];

        DB::table('districts')->insert($districts);
    }
}
