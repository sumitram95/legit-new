<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class LocalGovernmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $localGovernments = [
            [
                "id" => Str::uuid(),
                "name_en" => "Fungling Municipality",
                "name_np" => "फुङलिङ नगरपालिका",
                "district_label" => "dis1",
                "label" => "lg1"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aathrai Tribeni Rural Municipality",
                "name_np" => "आठराई त्रिवेणी गाउँपालिका",
                "district_label" => "dis1",
                "label" => "lg2"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sidingwa Rural Municipality",
                "name_np" => "सिदिङ्वा गाउँपालिका",
                "district_label" => "dis1",
                "label" => "lg3"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Phaktanglung Rural Municipality",
                "name_np" => "फक्ताङलुङ गाउँपालिका",
                "district_label" => "dis1",
                "label" => "lg4"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mikwakhola Rural Municipality",
                "name_np" => "मिक्वाखोला गाउँपालिका",
                "district_label" => "dis1",
                "label" => "lg5"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Meringden Rural Municipality",
                "name_np" => "मेरिङदेन गाउँपालिका",
                "district_label" => "dis1",
                "label" => "lg6"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Maiwakhola Rural Municipality",
                "name_np" => "मैवाखोला गाउँपालिका",
                "district_label" => "dis1",
                "label" => "lg7"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Yangwarak Rural Municipality",
                "name_np" => "याङवरक गाउँपालिका",
                "district_label" => "dis1",
                "label" => "lg8"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sirijangha Rural Municipality",
                "name_np" => "सिरीजङ्घा गाउँपालिका",
                "district_label" => "dis1",
                "label" => "lg9"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Fidim Municipality",
                "name_np" => "फिदिम नगरपालिका",
                "district_label" => "dis2",
                "label" => "lg10"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Falelung Rural Municipality",
                "name_np" => "फालेलुङ गाउँपालिका",
                "district_label" => "dis2",
                "label" => "lg11"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Falgunand Rural Municipality",
                "name_np" => "फाल्गुनन्द गाउँपालिका",
                "district_label" => "dis2",
                "label" => "lg12"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Hilihan Rural Municipality",
                "name_np" => "हिलिहाङ गाउँपालिका",
                "district_label" => "dis2",
                "label" => "lg13"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kummayak Rural Municipality",
                "name_np" => "कुम्मायक गाउँपालिका",
                "district_label" => "dis2",
                "label" => "lg14"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Miklajung Rural Municipality",
                "name_np" => "मिक्लाजुङ गाउँपालिका",
                "district_label" => "dis2",
                "label" => "lg15"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tumwewa Rural Municipality",
                "name_np" => "तुम्वेवा गाउँपालिका",
                "district_label" => "dis2",
                "label" => "lg16"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Yangwarak Rural Municipality",
                "name_np" => "याङवरक गाउँपालिका",
                "district_label" => "dis2",
                "label" => "lg17"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ilam Municipality",
                "name_np" => "ईलाम नगरपालिका",
                "district_label" => "dis3",
                "label" => "lg18"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Deumai Municipality",
                "name_np" => "देउमाई नगरपालिका",
                "district_label" => "dis3",
                "label" => "lg19"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mai Municipality",
                "name_np" => "माई नगरपालिका",
                "district_label" => "dis3",
                "label" => "lg20"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Suryodaya Municipality",
                "name_np" => "सूर्योदय नरपालिका",
                "district_label" => "dis3",
                "label" => "lg21"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Fakfokthum Rural Municipality",
                "name_np" => "फाकफोकथुम गाउँपालिका",
                "district_label" => "dis3",
                "label" => "lg22"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chulachuli Rural Municipality",
                "name_np" => "चुलाचुली गाउँपालिका",
                "district_label" => "dis3",
                "label" => "lg23"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Maijogmai Rural Municipality",
                "name_np" => "माईजोगमाई गाउँपालिका",
                "district_label" => "dis3",
                "label" => "lg24"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mangsebung Rural Municipality",
                "name_np" => "माङसेबुङ गाउँपालिका",
                "district_label" => "dis3",
                "label" => "lg25"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rong Rural Municipality",
                "name_np" => "रोङ गाउँपालिका",
                "district_label" => "dis3",
                "label" => "lg26"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sandakpur Rural Municipality",
                "name_np" => "सन्दकपुर गाउँपालिका",
                "district_label" => "dis3",
                "label" => "lg27"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mechinagar Municipality",
                "name_np" => "मेचीनगर नगरपालिका",
                "district_label" => "dis4",
                "label" => "lg28"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Damak Municipality",
                "name_np" => "दमक नगरपालिका",
                "district_label" => "dis4",
                "label" => "lg29"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kankai Municipality",
                "name_np" => "कन्काई नगरपालिका",
                "district_label" => "dis4",
                "label" => "lg30"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhadrapur Municipality",
                "name_np" => "भद्रपुर नगरपालिका",
                "district_label" => "dis4",
                "label" => "lg31"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Arjundhara Municipality",
                "name_np" => "अर्जुनधारा नगरपालिका",
                "district_label" => "dis4",
                "label" => "lg32"
            ],

            [
                "id" => Str::uuid(),
                "name_en" => "Shivasatakshi Municipality",
                "name_np" => "शिवसताक्षी नगरपालिका",
                "district_label" => "dis4",
                "label" => "lg33"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gauradaha Municipality",
                "name_np" => "गौरादह नगरपालिका",
                "district_label" => "dis4",
                "label" => "lg34"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Birtamod Municipality",
                "name_np" => "विर्तामोड नगरपालिका",
                "district_label" => "dis4",
                "label" => "lg35"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kamal Rural Municipality",
                "name_np" => "कमल गाउँपालिका",
                "district_label" => "dis4",
                "label" => "lg36"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gaurigunj Rural Municipality",
                "name_np" => "गौरिगंज गाउँपालिका",
                "district_label" => "dis4",
                "label" => "lg37"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Barhadashi Rural Municipality",
                "name_np" => "बाह्रदशी गाउँपालिका",
                "district_label" => "dis4",
                "label" => "lg38"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jhapa Rural Municipality",
                "name_np" => "झापा गाउँपालिका",
                "district_label" => "dis4",
                "label" => "lg39"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Buddhashanti Rural Municipality",
                "name_np" => "बुद्धशान्ति गाउँपालिका",
                "district_label" => "dis4",
                "label" => "lg40"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Haldibari Rural Municipality",
                "name_np" => "हल्दीबारी गाउँपालिका",
                "district_label" => "dis4",
                "label" => "lg41"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kachankawal Rural Municipality",
                "name_np" => "कचनकवल गाउँपालिका",
                "district_label" => "dis4",
                "label" => "lg42"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Biratnagar Metropolitan City",
                "name_np" => "विराटनगर महानगरपालिका",
                "district_label" => "dis5",
                "label" => "lg43"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Belbari Municipality",
                "name_np" => "बेलवारी नगरपालिका",
                "district_label" => "dis5",
                "label" => "lg44"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Letang Municipality",
                "name_np" => "लेटाङ नगरपालिका",
                "district_label" => "dis5",
                "label" => "lg45"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pathari Shanishchare Municipality",
                "name_np" => "पथरी शनिश्चरे नगरपालिका",
                "district_label" => "dis5",
                "label" => "lg46"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rangeli Municipality",
                "name_np" => "रंगेली नगरपालिका",
                "district_label" => "dis5",
                "label" => "lg47"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ratuwamai Municipality",
                "name_np" => "रतुवामाई नगरपालिका",
                "district_label" => "dis5",
                "label" => "lg48"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sundarharaicha Municipality",
                "name_np" => "सुन्दरहरैंचा नगरपालिका",
                "district_label" => "dis5",
                "label" => "lg49"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Urlabari Municipality",
                "name_np" => "उर्लाबारी नगरपालिका",
                "district_label" => "dis5",
                "label" => "lg50"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Budhiganga Rural Municipality",
                "name_np" => "बुढीगंगा गाउँपालिका",
                "district_label" => "dis5",
                "label" => "lg51"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhanpalthan Rural Municipality",
                "name_np" => "धनपालथान गाउँपालिका",
                "district_label" => "dis5",
                "label" => "lg52"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gramthan Rural Municipality",
                "name_np" => "ग्रामथान गाउँपालिका",
                "district_label" => "dis5",
                "label" => "lg53"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jahada Rural Municipality",
                "name_np" => "जहदा गाउँपालिका",
                "district_label" => "dis5",
                "label" => "lg54"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kanepokhari Rural Municipality",
                "name_np" => "कानेपोखरी गाउँपालिका",
                "district_label" => "dis5",
                "label" => "lg55"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Katahari Rural Municipality",
                "name_np" => "कटहरी गाउँपालिका",
                "district_label" => "dis5",
                "label" => "lg56"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kerabari Rural Municipality",
                "name_np" => "केराबारी गाउँपालिका",
                "district_label" => "dis5",
                "label" => "lg57"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Miklajung Rural Municipality",
                "name_np" => "मिक्लाजुङ गाउँपालिका",
                "district_label" => "dis5",
                "label" => "lg58"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Itahari Sub-Metropolitan City",
                "name_np" => "ईटहरी उपमहानगरपालिका",
                "district_label" => "dis6",
                "label" => "lg59"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dharan Sub-Metropolitan City",
                "name_np" => "धरान उपमहानगरपालिका",
                "district_label" => "dis6",
                "label" => "lg60"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Inaruwa Municipality",
                "name_np" => "इनरुवा नगरपालिका",
                "district_label" => "dis6",
                "label" => "lg61"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Duhabi Municipality",
                "name_np" => "दुहवी नगरपालिका",
                "district_label" => "dis6",
                "label" => "lg62"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ramdhuni Municipality",
                "name_np" => "रामधुनी नगरपालिका",
                "district_label" => "dis6",
                "label" => "lg63"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Barah Municipality",
                "name_np" => "बराह नगरपालिका",
                "district_label" => "dis6",
                "label" => "lg64"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dewanganj Rural Municipality",
                "name_np" => "देवानगञ्ज गाउँपालिका",
                "district_label" => "dis6",
                "label" => "lg65"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Koshi Rural Municipality",
                "name_np" => "कोशी गाउँपालिका",
                "district_label" => "dis6",
                "label" => "lg66"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gadhi Rural Municipality",
                "name_np" => "गढी गाउँपालिका",
                "district_label" => "dis6",
                "label" => "lg67"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Barju Rural Municipality",
                "name_np" => "बर्जु गाउँपालिका",
                "district_label" => "dis6",
                "label" => "lg68"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhokraha Rural Municipality",
                "name_np" => "भोक्राहा गाउँपालिका",
                "district_label" => "dis6",
                "label" => "lg69"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Harinagara Rural Municipality",
                "name_np" => "हरिनगरा गाउँपालिका",
                "district_label" => "dis6",
                "label" => "lg70"
            ],


            // /////////////////////////////////////////////////////////////////////////////////////////////////////
            [
                "id" => Str::uuid(),
                "name_en" => "Harinagara Rural Municipality",
                "name_np" => "हरिनगरा गाउँपालिका",
                "district_label" => "dis6",
                "label" => "lg71"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pakhribas Municipality",
                "name_np" => "पाख्रिवास नगरपालिका",
                "district_label" => "dis7",
                "label" => "lg72"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhankuta Municipality",
                "name_np" => "धनकुटा नगरपालिका",
                "district_label" => "dis7",
                "label" => "lg73"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahalaxmi Municipality",
                "name_np" => "महालक्ष्मी नगरपालिका",
                "district_label" => "dis7",
                "label" => "lg74"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sangurigadhi Rural Municipality",
                "name_np" => "साँगुरीगढी गाउँपालिका",
                "district_label" => "dis7",
                "label" => "lg75"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khalsa Chhintang Sahidbhumi Rural Municipality",
                "name_np" => "खाल्सा छिन्ताङ सहीदभूमि गाउँपालिका",
                "district_label" => "dis7",
                "label" => "lg76"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chhathar Jorpati Rural Municipality",
                "name_np" => "छथर जोरपाटी गाउँपालिका",
                "district_label" => "dis7",
                "label" => "lg77"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chaubise Rural Municipality",
                "name_np" => "चौबिसे गाउँपालिका",
                "district_label" => "dis7",
                "label" => "lg78"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Myanglung Municipality",
                "name_np" => "म्याङलुङ नगरपालिका",
                "district_label" => "dis8",
                "label" => "lg79"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Laligurans Municipality",
                "name_np" => "लालीगुराँस नगरपालिका",
                "district_label" => "dis8",
                "label" => "lg80"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aathrai Rural Municipality",
                "name_np" => "आठराई गाउँपालिका",
                "district_label" => "dis8",
                "label" => "lg81"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chhathar Rural Municipality",
                "name_np" => "छथर गाउँपालिका",
                "district_label" => "dis8",
                "label" => "lg82"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Fedap Rural Municipality",
                "name_np" => "फेदाप गाउँपालिका",
                "district_label" => "dis8",
                "label" => "lg83"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Menchhayayem Rural Municipality",
                "name_np" => "मेन्छयायेम गाउँपालिका",
                "district_label" => "dis8",
                "label" => "lg84"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chainpur Municipality",
                "name_np" => "चैनपुर नगरपालिका",
                "district_label" => "dis9",
                "label" => "lg85"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dharmadevi Municipality",
                "name_np" => "धर्मदेवी नगरपालिका",
                "district_label" => "dis9",
                "label" => "lg86"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khandbari Municipality",
                "name_np" => "खाँदवारी नगरपालिका",
                "district_label" => "dis9",
                "label" => "lg87"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Madi Municipality",
                "name_np" => "मादी नगरपालिका",
                "district_label" => "dis9",
                "label" => "lg88"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Panchkhapan Municipality",
                "name_np" => "पाँचखपन नगरपालिका",
                "district_label" => "dis9",
                "label" => "lg89"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhotkhola Rural Municipality",
                "name_np" => "भोटखोला गाउँपालिका",
                "district_label" => "dis9",
                "label" => "lg90"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chichila Rural Municipality",
                "name_np" => "चिचिला गाउँपालिका",
                "district_label" => "dis9",
                "label" => "lg91"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Makalu Rural Municipality",
                "name_np" => "मकालु गाउँपालिका",
                "district_label" => "dis9",
                "label" => "lg92"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sabhapokhari Rural Municipality",
                "name_np" => "सभापोखरी गाउँपालिका",
                "district_label" => "dis9",
                "label" => "lg93"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Silichong Rural Municipality",
                "name_np" => "सिलीचोङ गाउँपालिका",
                "district_label" => "dis9",
                "label" => "lg94"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhojpur Municipality",
                "name_np" => "भोजपुर नगरपालिका",
                "district_label" => "dis10",
                "label" => "lg95"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shadanand Municipality",
                "name_np" => "षडानन्द नगरपालिका",
                "district_label" => "dis10",
                "label" => "lg96"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tyamke Maiyum Rural Municipality",
                "name_np" => "ट्याम्केमैयुम गाउँपालिका",
                "district_label" => "dis10",
                "label" => "lg97"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ramprasad Rai Rural Municipality",
                "name_np" => "रामप्रसाद राई गाउँपालिका",
                "district_label" => "dis10",
                "label" => "lg98"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Arun Rural Municipality",
                "name_np" => "अरुण गाउँपालिका",
                "district_label" => "dis10",
                "label" => "lg99"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pauwadungma Rural Municipality",
                "name_np" => "पौवादुङमा गाउँपालिका",
                "district_label" => "dis10",
                "label" => "lg100"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Salpasilichho Rural Municipality",
                "name_np" => "साल्पासिलिछो गाउँपालिका",
                "district_label" => "dis10",
                "label" => "lg101"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Amchok Rural Municipality",
                "name_np" => "आमचोक गाउँपालिका",
                "district_label" => "dis10",
                "label" => "lg102"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Hatuwagadhi Rural Municipality",
                "name_np" => "हतुवागढी गाउँपालिका",
                "district_label" => "dis10",
                "label" => "lg103"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Solududhkunda Municipality",
                "name_np" => "सोलुदुधकुण्ड नगरपालिका",
                "district_label" => "dis11",
                "label" => "lg104"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dudh Koshi Rural Municipality",
                "name_np" => "दुधकोशी गाउँपालिका",
                "district_label" => "dis11",
                "label" => "lg105"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khumbu Pasanglhamu Rural Municipality",
                "name_np" => "खुम्वु पासाङल्हामु गाउँपालिका",
                "district_label" => "dis11",
                "label" => "lg106"
            ],

            //////////////////////////////////////////////////////////////////////////
            [
                "id" => Str::uuid(),
                "name_en" => "Dudhkaushika Rural Municipality",
                "name_np" => "दुधकौशिका गाउँपालिका",
                "district_label" => "dis11",
                "label" => "lg107"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nechasalyan Rural Municipality",
                "name_np" => "नेचासल्यान गाँउपालिका",
                "district_label" => "dis11",
                "label" => "lg108"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahakulung Rural Municipality",
                "name_np" => "माहाकुलुङ गाउँपालिका",
                "district_label" => "dis11",
                "label" => "lg109"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Likhu Pike Rural Municipality",
                "name_np" => "लिखु पिके गाउँपालिका",
                "district_label" => "dis11",
                "label" => "lg110"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sotang Rural Municipality",
                "name_np" => "सोताङ गाउँपालिका",
                "district_label" => "dis11",
                "label" => "lg111"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Siddhicharan Municipality",
                "name_np" => "सिद्धिचरण नगरपालिका",
                "district_label" => "dis12",
                "label" => "lg112"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khijidemba Rural Municipality",
                "name_np" => "खिजीदेम्वा गाउँपालिका",
                "district_label" => "dis12",
                "label" => "lg113"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Champadevi Rural Municipality",
                "name_np" => "चम्पादेवी गाउँपालिका",
                "district_label" => "dis12",
                "label" => "lg114"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chisankhugadhi Rural Municipality",
                "name_np" => "चिशंखुगढी गाउँपालिका",
                "district_label" => "dis12",
                "label" => "lg115"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Manebhanjyang Rural Municipality",
                "name_np" => "मानेभञ्ज्याङ गाउँपालिका",
                "district_label" => "dis12",
                "label" => "lg116"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Molung Rural Municipality",
                "name_np" => "मोलुङ गाउँपालिका",
                "district_label" => "dis12",
                "label" => "lg117"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Likhu Rural Municipality",
                "name_np" => "लिखु गाउँपालिका",
                "district_label" => "dis12",
                "label" => "lg118"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sunkoshi Rural Municipality",
                "name_np" => "सुनकोशी गाउँपालिका",
                "district_label" => "dis12",
                "label" => "lg119"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Halesi Tuwachung Municipality",
                "name_np" => "हलेसी तुवाचुङ नगरपालिका",
                "district_label" => "dis13",
                "label" => "lg120"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rupakot Majhuwagadhi Municipality",
                "name_np" => "रुपाकोट मझुवागढी नगरपालिका",
                "district_label" => "dis13",
                "label" => "lg121"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aiselukharka Rural Municipality",
                "name_np" => "ऐसेलुखर्क गाउँपालिका",
                "district_label" => "dis13",
                "label" => "lg122"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lamidanda Rural Municipality",
                "name_np" => "लामिडाँडा गाउँपालिका",
                "district_label" => "dis13",
                "label" => "lg123"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jantedhunga Rural Municipality",
                "name_np" => "जन्तेढुङ्गा गाउँपालिका",
                "district_label" => "dis13",
                "label" => "lg124"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khotang Rural Municipality",
                "name_np" => "खोटेहाङ गाउँपालिका",
                "district_label" => "dis13",
                "label" => "lg125"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kepilasgadhi Rural Municipality",
                "name_np" => "केपिलासगढी गाउँपालिका",
                "district_label" => "dis13",
                "label" => "lg126"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Diprung Rural Municipality",
                "name_np" => "दिप्रुङ गाउँपालिका",
                "district_label" => "dis13",
                "label" => "lg127"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sakela Rural Municipality",
                "name_np" => "साकेला गाउँपालिका",
                "district_label" => "dis13",
                "label" => "lg128"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Barahapokhari Rural Municipality",
                "name_np" => "बराहपोखरी गाउँपालिका",
                "district_label" => "dis13",
                "label" => "lg129"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Katari Municipality",
                "name_np" => "कटारी नगरपालिका",
                "district_label" => "dis14",
                "label" => "lg130"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chauddandigadhi Municipality",
                "name_np" => "चौदण्डीगढी नगरपालिका",
                "district_label" => "dis14",
                "label" => "lg131"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Triyuga Municipality",
                "name_np" => "त्रियुगा नगरपालिका",
                "district_label" => "dis14",
                "label" => "lg132"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Belka Municipality",
                "name_np" => "वेलका नगरपालिका",
                "district_label" => "dis14",
                "label" => "lg133"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Udayapurgadhi Rural Municipality",
                "name_np" => "उदयपुरगढी गाउँपालिका",
                "district_label" => "dis14",
                "label" => "lg134"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tapli Rural Municipality",
                "name_np" => "ताप्ली गाउँपालिका",
                "district_label" => "dis14",
                "label" => "lg135"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rautamai Rural Municipality",
                "name_np" => "रौतामाई गाउँपालिका",
                "district_label" => "dis14",
                "label" => "lg136"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sunkoshi Rural Municipality",
                "name_np" => "सुनकोशी गाउँपालिका",
                "district_label" => "dis14",
                "label" => "lg137"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rajbiraj Municipality",
                "name_np" => "राजविराज नगरपालिका",
                "district_label" => "dis15",
                "label" => "lg138"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kanchanrup Municipality",
                "name_np" => "कञ्चनरुप नगरपालिका",
                "district_label" => "dis15",
                "label" => "lg139"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dakneshwari Municipality",
                "name_np" => "डाक्नेश्वरी नगरपालिका",
                "district_label" => "dis15",
                "label" => "lg140"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bodebarsain Municipality",
                "name_np" => "बोदेबरसाईन नगरपालिका",
                "district_label" => "dis15",
                "label" => "lg141"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khadak Municipality",
                "name_np" => "खडक नगरपालिका",
                "district_label" => "dis15",
                "label" => "lg142"
            ],

            /////////////////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Shambhunath Municipality",
                "name_np" => "शम्भुनाथ नगरपालिका",
                "district_label" => "dis15",
                "label" => "lg143"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Surunga Municipality",
                "name_np" => "सुरुङ्‍गा नगरपालिका",
                "district_label" => "dis15",
                "label" => "lg144"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Hanumannagar Kankalini Municipality",
                "name_np" => "हनुमाननगर कङ्‌कालिनी नगरपालिका",
                "district_label" => "dis15",
                "label" => "lg145"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Krishnasavaran Rural Municipality",
                "name_np" => "कृष्णासवरन गाउँपालिका",
                "district_label" => "dis15",
                "label" => "lg146"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chhinnamasta Rural Municipality",
                "name_np" => "छिन्नमस्ता गाउँपालिका",
                "district_label" => "dis15",
                "label" => "lg147"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahadeva Rural Municipality",
                "name_np" => "महादेवा गाउँपालिका",
                "district_label" => "dis15",
                "label" => "lg148"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Saptakoshi Municipality",
                "name_np" => "सप्तकोशी नगरपालिका",
                "district_label" => "dis15",
                "label" => "lg149"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tirahut Rural Municipality",
                "name_np" => "तिरहुत गाउँपालिका",
                "district_label" => "dis15",
                "label" => "lg150"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tilathi Koiladi Rural Municipality",
                "name_np" => "तिलाठी कोईलाडी गाउँपालिका",
                "district_label" => "dis15",
                "label" => "lg151"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rupani Rural Municipality",
                "name_np" => "रुपनी गाउँपालिका",
                "district_label" => "dis15",
                "label" => "lg152"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Belhi Chapena Rural Municipality",
                "name_np" => "बेल्ही चपेना गाउँपालिका",
                "district_label" => "dis15",
                "label" => "lg153"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bishnupur Rural Municipality",
                "name_np" => "बिष्णुपुर गाउँपालिका",
                "district_label" => "dis15",
                "label" => "lg154"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lahan Municipality",
                "name_np" => "लहान नगरपालिका",
                "district_label" => "dis16",
                "label" => "lg155"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhangadhimai Municipality",
                "name_np" => "धनगढीमाई नगरपालिका",
                "district_label" => "dis16",
                "label" => "lg156"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Siraha Municipality",
                "name_np" => "सिरहा नगरपालिका",
                "district_label" => "dis16",
                "label" => "lg157"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Golbazar Municipality",
                "name_np" => "गोलबजार नगरपालिका",
                "district_label" => "dis16",
                "label" => "lg158"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mirchaiya Municipality",
                "name_np" => "मिर्चैयाँ नगरपालिका",
                "district_label" => "dis16",
                "label" => "lg159"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kalyanpur Municipality",
                "name_np" => "कल्याणपुर नगरपालिका",
                "district_label" => "dis16",
                "label" => "lg160"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhagwanpur Rural Municipality",
                "name_np" => "भगवानपुर गाउँपालिका",
                "district_label" => "dis16",
                "label" => "lg161"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aurahi Rural Municipality",
                "name_np" => "औरही गाउँपालिका",
                "district_label" => "dis16",
                "label" => "lg162"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bishnupur Rural Municipality",
                "name_np" => "विष्णुपुर गाउँपालिका",
                "district_label" => "dis16",
                "label" => "lg163"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sukhipur Municipality",
                "name_np" => "सुखीपुर नगरपालिका",
                "district_label" => "dis16",
                "label" => "lg164"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Karjanha Municipality",
                "name_np" => "कर्जन्हा नगरपालिका",
                "district_label" => "dis16",
                "label" => "lg165"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bariyarpatti Rural Municipality",
                "name_np" => "बरियारपट्टी गाउँपालिका",
                "district_label" => "dis16",
                "label" => "lg166"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lakshmipur Patari Rural Municipality",
                "name_np" => "लक्ष्मीपुर पतारी गाउँपालिका",
                "district_label" => "dis16",
                "label" => "lg167"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Naraha Rural Municipality",
                "name_np" => "नरहा गाउँपालिका",
                "district_label" => "dis16",
                "label" => "lg168"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sakhuwa Nankarkatti Rural Municipality",
                "name_np" => "सखुवानान्कारकट्टी गाउँपालिका",
                "district_label" => "dis16",
                "label" => "lg169"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Arnama Rural Municipality",
                "name_np" => "अर्नमा गाउँपालिका",
                "district_label" => "dis16",
                "label" => "lg170"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Navarajpur Rural Municipality",
                "name_np" => "नवराजपुर गाउँपालिका",
                "district_label" => "dis16",
                "label" => "lg171"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Janakpur Sub-Metropolitan City",
                "name_np" => "जनकपुर उपमहानगरपालिका",
                "district_label" => "dis17",
                "label" => "lg172"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kshireshwarnath Municipality",
                "name_np" => "क्षिरेश्वरनाथ नगरपालिका",
                "district_label" => "dis17",
                "label" => "lg173"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ganeshman Charnath Municipality",
                "name_np" => "गणेशमान चारनाथ नगरपालिका",
                "district_label" => "dis17",
                "label" => "lg174"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhanushadham Municipality",
                "name_np" => "धनुषाधाम नगरपालिका",
                "district_label" => "dis17",
                "label" => "lg175"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nagarain Municipality",
                "name_np" => "नगराइन नगरपालिका",
                "district_label" => "dis17",
                "label" => "lg176"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bideha Municipality",
                "name_np" => "विदेह नगरपालिका",
                "district_label" => "dis17",
                "label" => "lg177"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mithila Municipality",
                "name_np" => "मिथिला नगरपालिका",
                "district_label" => "dis17",
                "label" => "lg178"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shahidnagar Municipality",
                "name_np" => "शहीदनगर नगरपालिका",
                "district_label" => "dis17",
                "label" => "lg179"
            ],

            //////////////////////////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Sabaila Municipality",
                "name_np" => "सबैला नगरपालिका",
                "district_label" => "dis17",
                "label" => "lg180"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kamala Siddhidatri Rural Municipality",
                "name_np" => "कमला सिद्धीदात्री गाउँपालिका",
                "district_label" => "dis17",
                "label" => "lg181"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Janaknandini Rural Municipality",
                "name_np" => "जनकनन्दिनी गाउँपालिका",
                "district_label" => "dis17",
                "label" => "lg182"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bateshwar Rural Municipality",
                "name_np" => "बटेश्वर गाउँपालिका",
                "district_label" => "dis17",
                "label" => "lg183"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mithila Bihari Municipality",
                "name_np" => "मिथिला बिहारी नगरपालिका",
                "district_label" => "dis17",
                "label" => "lg184"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mukhiapatti Musharniya Rural Municipality",
                "name_np" => "मुखियापट्टी मुसहरमिया गाउँपालिका",
                "district_label" => "dis17",
                "label" => "lg185"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lakshminiya Rural Municipality",
                "name_np" => "लक्ष्मीनिया गाउँपालिका",
                "district_label" => "dis17",
                "label" => "lg186"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Hanspur Municipality",
                "name_np" => "हंसपुर नगरपालिका",
                "district_label" => "dis17",
                "label" => "lg187"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aurahi Rural Municipality",
                "name_np" => "औरही गाउंपालिका",
                "district_label" => "dis17",
                "label" => "lg188"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jaleshwar Municipality",
                "name_np" => "जलेश्वर नगरपालिका",
                "district_label" => "dis18",
                "label" => "lg189"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bardibas Municipality",
                "name_np" => "बर्दिबास नगरपालिका",
                "district_label" => "dis18",
                "label" => "lg190"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gaushala Municipality",
                "name_np" => "गौशाला नगरपालिका",
                "district_label" => "dis18",
                "label" => "lg191"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ekadara Rural Municipality",
                "name_np" => "एकडारा गाउँपालिका",
                "district_label" => "dis18",
                "label" => "lg192"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sonama Rural Municipality",
                "name_np" => "सोनमा गाउँपालिका",
                "district_label" => "dis18",
                "label" => "lg193"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Samsi Rural Municipality",
                "name_np" => "साम्सी गाउँपालिका",
                "district_label" => "dis18",
                "label" => "lg194"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Loharpatti Municipality",
                "name_np" => "लोहरपट्टी नगरपालिका",
                "district_label" => "dis18",
                "label" => "lg195"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ramgopalpur Municipality",
                "name_np" => "रामगोपालपुर नगरपालिका",
                "district_label" => "dis18",
                "label" => "lg196"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahottari Rural Municipality",
                "name_np" => "महोत्तरी गाउँपालिका",
                "district_label" => "dis18",
                "label" => "lg197"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Manara Shisawa Municipality",
                "name_np" => "मनराशिसवा नगरपालिका",
                "district_label" => "dis18",
                "label" => "lg198"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Matihani Municipality",
                "name_np" => "मटिहानी नगरपालिका",
                "district_label" => "dis18",
                "label" => "lg199"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhangaha Municipality",
                "name_np" => "भँगाहा नगरपालिका",
                "district_label" => "dis18",
                "label" => "lg200"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Balwa Municipality",
                "name_np" => "बलवा नगरपालिका",
                "district_label" => "dis18",
                "label" => "lg201"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pipara Rural Municipality",
                "name_np" => "पिपरा गाउँपालिका",
                "district_label" => "dis18",
                "label" => "lg202"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aurahi Municipality",
                "name_np" => "औरही नगरपालिका",
                "district_label" => "dis18",
                "label" => "lg203"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ishwarpur Municipality",
                "name_np" => "ईश्वरपुर नगरपालिका",
                "district_label" => "dis19",
                "label" => "lg204"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Malangwa Municipality",
                "name_np" => "मलंगवा नगरपालिका",
                "district_label" => "dis19",
                "label" => "lg205"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lalbandi Municipality",
                "name_np" => "लालबन्दी नगरपालिका",
                "district_label" => "dis19",
                "label" => "lg206"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Haripur Municipality",
                "name_np" => "हरिपुर नगरपालिका",
                "district_label" => "dis19",
                "label" => "lg207"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Haripurwa Municipality",
                "name_np" => "हरिपुर्वा नगरपालिका",
                "district_label" => "dis19",
                "label" => "lg208"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Hariban Municipality",
                "name_np" => "हरिवन नगरपालिका",
                "district_label" => "dis19",
                "label" => "lg209"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Barhathwa Municipality",
                "name_np" => "बरहथवा नगरपालिका",
                "district_label" => "dis19",
                "label" => "lg210"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Balara Municipality",
                "name_np" => "बलरा नगरपालिका",
                "district_label" => "dis19",
                "label" => "lg211"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Godaita Municipality",
                "name_np" => "गोडैटा नगरपालिका",
                "district_label" => "dis19",
                "label" => "lg212"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bagmati Municipality",
                "name_np" => "बागमती नगरपालिका",
                "district_label" => "dis19",
                "label" => "lg213"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kabilasi Municipality",
                "name_np" => "कविलासी नगरपालिका",
                "district_label" => "dis19",
                "label" => "lg214"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chakraghatta Rural Municipality",
                "name_np" => "चक्रघट्टा गाउँपालिका",
                "district_label" => "dis19",
                "label" => "lg215"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chandranagar Rural Municipality",
                "name_np" => "चन्द्रनगर गाउँपालिका",
                "district_label" => "dis19",
                "label" => "lg216"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhankaul Rural Municipality",
                "name_np" => "धनकौल गाउँपालिका",
                "district_label" => "dis19",
                "label" => "lg217"
            ],

            ////////////////////////////////////////////////////
            [
                "id" => Str::uuid(),
                "name_en" => "Brahmapuri Rural Municipality",
                "name_np" => "ब्रह्मपुरी गाउँपालिका",
                "district_label" => "dis19",
                "label" => "lg218"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ramnagar Rural Municipality",
                "name_np" => "रामनगर गाउँपालिका",
                "district_label" => "dis19",
                "label" => "lg219"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Vishnu Rural Municipality",
                "name_np" => "विष्णु गाउँपालिका",
                "district_label" => "dis19",
                "label" => "lg220"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chandrapur Municipality",
                "name_np" => "चन्द्रपुर नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg221"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Garuda Municipality",
                "name_np" => "गरुडा नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg222"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gaur Municipality",
                "name_np" => "गौर नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg223"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Baudhimai Municipality",
                "name_np" => "बौधीमाई नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg224"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Brindaban Municipality",
                "name_np" => "बृन्दावन नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg225"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Devahi Gonahi Municipality",
                "name_np" => "देवाही गोनाही नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg226"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Durga Bhagwati Rural Municipality",
                "name_np" => "दुर्गा भगवती गाउँपालिका",
                "district_label" => "dis20",
                "label" => "lg227"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gadhimai Municipality",
                "name_np" => "गढीमाई नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg228"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gujara Municipality",
                "name_np" => "गुजरा नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg229"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Katahariya Municipality",
                "name_np" => "कटहरिया नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg230"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Madhav Narayan Municipality",
                "name_np" => "माधव नारायण नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg231"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Maulapur Municipality",
                "name_np" => "मौलापुर नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg232"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Fatuwa Bijaypur Municipality",
                "name_np" => "फतुवाबिजयपुर नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg233"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ishnath Municipality",
                "name_np" => "ईशनाथ नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg234"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Paroha Municipality",
                "name_np" => "परोहा नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg235"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rajpur Municipality",
                "name_np" => "राजपुर नगरपालिका",
                "district_label" => "dis20",
                "label" => "lg236"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kalaiya Sub-Metropolitan City",
                "name_np" => "कलैया उपमहानगरपालिका",
                "district_label" => "dis21",
                "label" => "lg237"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jitpur Simara Sub-Metropolitan City",
                "name_np" => "जीतपुर सिमरा उपमहानगरपालिका",
                "district_label" => "dis21",
                "label" => "lg238"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kolhabi Municipality",
                "name_np" => "कोल्हवी नगरपालिका",
                "district_label" => "dis21",
                "label" => "lg239"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nijgadh Municipality",
                "name_np" => "निजगढ नगरपालिका",
                "district_label" => "dis21",
                "label" => "lg240"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahagadhimai Municipality",
                "name_np" => "महागढीमाई नगरपालिका",
                "district_label" => "dis21",
                "label" => "lg241"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Simraungadh Municipality",
                "name_np" => "सिम्रौनगढ नगरपालिका",
                "district_label" => "dis21",
                "label" => "lg242"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Adarsh Kotwal Rural Municipality",
                "name_np" => "आदर्श कोटवाल गाउँपालिका",
                "district_label" => "dis21",
                "label" => "lg243"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Karaiyamai Rural Municipality",
                "name_np" => "करैयामाई गाउँपालिका",
                "district_label" => "dis21",
                "label" => "lg244"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Devtal Rural Municipality",
                "name_np" => "देवताल गाउँपालिका",
                "district_label" => "dis21",
                "label" => "lg245"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pacharauta Municipality",
                "name_np" => "पचरौता नगरपालिका",
                "district_label" => "dis21",
                "label" => "lg246"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Parwanipur Rural Municipality",
                "name_np" => "परवानीपुर गाउँपालिका",
                "district_label" => "dis21",
                "label" => "lg247"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Prasauni Rural Municipality",
                "name_np" => "प्रसौनी गाउँपालिका",
                "district_label" => "dis21",
                "label" => "lg248"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Feta Rural Municipality",
                "name_np" => "फेटा गाउँपालिका",
                "district_label" => "dis21",
                "label" => "lg249"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Baragadhi Rural Municipality",
                "name_np" => "बारागढी गाउँपालिका",
                "district_label" => "dis21",
                "label" => "lg250"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Suwarna Rural Municipality",
                "name_np" => "सुवर्ण गाउँपालिका",
                "district_label" => "dis21",
                "label" => "lg251"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Birgunj Metropolitan City",
                "name_np" => "बिरगंज महानगरपालिका",
                "district_label" => "dis22",
                "label" => "lg252"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pokhariya Municipality",
                "name_np" => "पोखरिया नगरपालिका",
                "district_label" => "dis22",
                "label" => "lg253"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Thori Rural Municipality",
                "name_np" => "ठोरि गाउँपालिका",
                "district_label" => "dis22",
                "label" => "lg254"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jagarnathpur Rural Municipality",
                "name_np" => "जगरनाथपुर गाउँपालिका",
                "district_label" => "dis22",
                "label" => "lg255"
            ],

            //////////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Dhobini Rural Municipality",
                "name_np" => "धोबीनी गाउँपालिका",
                "district_label" => "dis22",
                "label" => "lg256"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chhipaharmai Rural Municipality",
                "name_np" => "छिपहरमाई गाउँपालिका",
                "district_label" => "dis22",
                "label" => "lg257"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pakaha Mainpur Rural Municipality",
                "name_np" => "पकाहा मैनपुर गाउँपालिका",
                "district_label" => "dis22",
                "label" => "lg258"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bindabasini Rural Municipality",
                "name_np" => "बिन्दबासिनी गाउँपालिका",
                "district_label" => "dis22",
                "label" => "lg259"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bahudarmai Municipality",
                "name_np" => "बहुदरमाई नगरपालिका",
                "district_label" => "dis22",
                "label" => "lg260"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Parsagadhi Municipality",
                "name_np" => "पर्सागढी नगरपालिका",
                "district_label" => "dis22",
                "label" => "lg261"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sakhuwa Prasauni Rural Municipality",
                "name_np" => "सखुवा प्रसौनी गाउँपालिका",
                "district_label" => "dis22",
                "label" => "lg262"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Paterwa Sugauli Rural Municipality",
                "name_np" => "पटेर्वा सुगौली गाउँपालिका",
                "district_label" => "dis22",
                "label" => "lg263"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Balan-Bihul Rural Municipality",
                "name_np" => "बलान-विहुल गाउँपालिका",
                "district_label" => "dis15",
                "label" => "lg264"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Basbariya Rural Municipality",
                "name_np" => "बसबरीया गाउँपालिका",
                "district_label" => "dis19",
                "label" => "lg265"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bishrampur Rural Municipality",
                "name_np" => "विश्रामपुर गाउँपालिका",
                "district_label" => "dis21",
                "label" => "lg266"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhanauji Rural Municipality",
                "name_np" => "धनौजी गाउँपालिका",
                "district_label" => "dis17",
                "label" => "lg267"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jirabhawani Rural Municipality",
                "name_np" => "जिराभवानी गाउँपालिका",
                "district_label" => "dis22",
                "label" => "lg268"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kalika Mai Rural Municipality",
                "name_np" => "कालिकामाई गाउँपालिका",
                "district_label" => "dis22",
                "label" => "lg269"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kawena Rural Municipality",
                "name_np" => "कौडेना गाउँपालिका",
                "district_label" => "dis19",
                "label" => "lg270"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Parsa Rural Municipality",
                "name_np" => "पर्सा गाउँपालिका",
                "district_label" => "dis19",
                "label" => "lg271"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Yamunamai Rural Municipality",
                "name_np" => "यमुनामाई गाउँपालिका",
                "district_label" => "dis20",
                "label" => "lg272"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kamalamai Municipality",
                "name_np" => "कमलामार्इ नगरपालिका",
                "district_label" => "dis23",
                "label" => "lg273"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dudhauli Municipality",
                "name_np" => "दुधौली नगरपालिका",
                "district_label" => "dis23",
                "label" => "lg274"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Golanjor Rural Municipality",
                "name_np" => "गोलन्जोर गाउँपालिका",
                "district_label" => "dis23",
                "label" => "lg275"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ghyanglekh Rural Municipality",
                "name_np" => "घ्याङलेख गाउँपालिका",
                "district_label" => "dis23",
                "label" => "lg276"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tinpatan Rural Municipality",
                "name_np" => "तीनपाटन गाउपालिका",
                "district_label" => "dis23",
                "label" => "lg277"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Fikkal Rural Municipality",
                "name_np" => "फिक्कल गाउँपालिका",
                "district_label" => "dis23",
                "label" => "lg278"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Marin Rural Municipality",
                "name_np" => "मरिण गाउँपालिका",
                "district_label" => "dis23",
                "label" => "lg279"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sunkoshi Rural Municipality",
                "name_np" => "सुनकोशी गाउँपालिका",
                "district_label" => "dis23",
                "label" => "lg280"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Hariharpurgadhi Rural Municipality",
                "name_np" => "हरिहरपुरगढी गाउँपालिका",
                "district_label" => "dis23",
                "label" => "lg281"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Manthali Municipality",
                "name_np" => "मन्थली नगरपालिका",
                "district_label" => "dis24",
                "label" => "lg282"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ramechhap Municipality",
                "name_np" => "रामेछाप नगरपालिका",
                "district_label" => "dis24",
                "label" => "lg283"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Umakunda Rural Municipality",
                "name_np" => "उमाकुण्ड गाउँपालिका",
                "district_label" => "dis24",
                "label" => "lg284"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khadadevi Rural Municipality",
                "name_np" => "खाँडादेवी गाउँपालिका",
                "district_label" => "dis24",
                "label" => "lg285"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gokulganga Rural Municipality",
                "name_np" => "गोकुलगङ्गा गाउँपालिका",
                "district_label" => "dis24",
                "label" => "lg286"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Doramba Rural Municipality",
                "name_np" => "दोरम्बा गाउँपालिका",
                "district_label" => "dis24",
                "label" => "lg287"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Likhu Rural Municipality",
                "name_np" => "लिखु गाउँपालिका",
                "district_label" => "dis24",
                "label" => "lg288"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sunapati Rural Municipality",
                "name_np" => "सुनापती गाउँपालिका",
                "district_label" => "dis24",
                "label" => "lg289"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jiri Municipality",
                "name_np" => "जिरी नगरपालिका",
                "district_label" => "dis25",
                "label" => "lg290"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhimsen Municipality",
                "name_np" => "भीमेश्वर नगरपालिका",
                "district_label" => "dis25",
                "label" => "lg291"
            ],

            //////////////////////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Kalinchok Rural Municipality",
                "name_np" => "कालिन्चोक गाँउपालिका",
                "district_label" => "dis25",
                "label" => "lg292"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gaurishankar Rural Municipality",
                "name_np" => "गौरिशंकर गाउँपालिका",
                "district_label" => "dis25",
                "label" => "lg293"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tamakoshi Rural Municipality",
                "name_np" => "तामाकोशी गाउँपालिका",
                "district_label" => "dis25",
                "label" => "lg294"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Melung Rural Municipality",
                "name_np" => "मेलुङ गाउँपालिका",
                "district_label" => "dis25",
                "label" => "lg295"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bigu Rural Municipality",
                "name_np" => "विगु गाउँपालिका",
                "district_label" => "dis25",
                "label" => "lg296"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Baiteshwor Rural Municipality",
                "name_np" => "वैतेश्वर गाउँपालिका",
                "district_label" => "dis25",
                "label" => "lg297"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sailung Rural Municipality",
                "name_np" => "शैलुङ गाउँपालिका",
                "district_label" => "dis25",
                "label" => "lg298"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chautara Sangachokgadhi Municipality",
                "name_np" => "चौतारा साँगाचोकगढी नगरपालिका",
                "district_label" => "dis26",
                "label" => "lg299"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bahrabise Municipality",
                "name_np" => "वाह्रविसे नगरपालिका",
                "district_label" => "dis26",
                "label" => "lg300"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Melamchi Municipality",
                "name_np" => "मेलम्ची नगरपालिका",
                "district_label" => "dis26",
                "label" => "lg301"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Indrawati Rural Municipality",
                "name_np" => "र्इन्द्रावती गाउँपालिका",
                "district_label" => "dis26",
                "label" => "lg302"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jugal Rural Municipality",
                "name_np" => "जुगल गाउँपालिका",
                "district_label" => "dis26",
                "label" => "lg303"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Panchpokhari Thangpal Rural Municipality",
                "name_np" => "पाँचपोखरी थाङपाल गाउँपालिका",
                "district_label" => "dis26",
                "label" => "lg304"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Balefi Rural Municipality",
                "name_np" => "बलेफी गाउँपालिका",
                "district_label" => "dis26",
                "label" => "lg305"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhotekoshi Rural Municipality",
                "name_np" => "भोटेकोशी गाउँपालिका",
                "district_label" => "dis26",
                "label" => "lg306"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lisankhu Pakhar Rural Municipality",
                "name_np" => "लिसंखु पाखर गाउँपालिका",
                "district_label" => "dis26",
                "label" => "lg307"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sunkoshi Rural Municipality",
                "name_np" => "सुनकोशी गाउपालिका",
                "district_label" => "dis26",
                "label" => "lg308"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Helambu Rural Municipality",
                "name_np" => "हेलम्बु गाउँपालिका",
                "district_label" => "dis26",
                "label" => "lg309"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tripurasundari Rural Municipality",
                "name_np" => "त्रिपुरासुन्दरी गाउँपालिका",
                "district_label" => "dis26",
                "label" => "lg310"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhulikhel Municipality",
                "name_np" => "धुलिखेल नगरपालिका",
                "district_label" => "dis27",
                "label" => "lg311"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Banepa Municipality",
                "name_np" => "बनेपा नगरपालिका",
                "district_label" => "dis27",
                "label" => "lg312"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Panauti Municipality",
                "name_np" => "पनौती नगरपालिका",
                "district_label" => "dis27",
                "label" => "lg313"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Panchkhal Municipality",
                "name_np" => "पाँचखाल नगरपालिका",
                "district_label" => "dis27",
                "label" => "lg314"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Namobuddha Municipality",
                "name_np" => "नमोबुद्ध नगरपालिका",
                "district_label" => "dis27",
                "label" => "lg315"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khanikhola Rural Municipality",
                "name_np" => "खानीखोला गाँउपालिका",
                "district_label" => "dis27",
                "label" => "lg316"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chauri Deurali Rural Municipality",
                "name_np" => "चौंरीदेउराली गाउँपालिका",
                "district_label" => "dis27",
                "label" => "lg317"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Temal Rural Municipality",
                "name_np" => "तेमाल गाँउपालिका",
                "district_label" => "dis27",
                "label" => "lg318"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bethanchok Rural Municipality",
                "name_np" => "बेथानचोक गाउँपालिका",
                "district_label" => "dis27",
                "label" => "lg319"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhumlu Rural Municipality",
                "name_np" => "भुम्लु गाउँपालिका",
                "district_label" => "dis27",
                "label" => "lg320"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mandan Deupur Municipality",
                "name_np" => "मण्डनदेउपुर नगरपालिका",
                "district_label" => "dis27",
                "label" => "lg321"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahabharat Rural Municipality",
                "name_np" => "महाभारत गाउँपालिका",
                "district_label" => "dis27",
                "label" => "lg322"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Roshi Rural Municipality",
                "name_np" => "रोशी गाँउपालिका",
                "district_label" => "dis27",
                "label" => "lg323"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lalitpur Metropolitan City",
                "name_np" => "ललितपुर महानगरपालिका",
                "district_label" => "dis28",
                "label" => "lg324"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Godawari Municipality",
                "name_np" => "गोदावरी नगरपालिका",
                "district_label" => "dis28",
                "label" => "lg325"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahalaxmi Municipality",
                "name_np" => "महालक्ष्मी नगरपालिका",
                "district_label" => "dis28",
                "label" => "lg326"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Konjyosom Rural Municipality",
                "name_np" => "कोन्ज्योसोम गाउँपालिका",
                "district_label" => "dis28",
                "label" => "lg327"
            ],

            ///////////////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Bagmati Rural Municipality",
                "name_np" => "वाग्मती गाउँपालिका",
                "district_label" => "dis28",
                "label" => "lg328"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahalaxmi Municipality",
                "name_np" => "महालक्ष्मी नगरपालिका",
                "district_label" => "dis28",
                "label" => "lg329"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Changunarayan Municipality",
                "name_np" => "चाँगुनारायण नगरपालिका",
                "district_label" => "dis29",
                "label" => "lg330"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhaktapur Municipality",
                "name_np" => "भक्तपुर नगरपालिका",
                "district_label" => "dis29",
                "label" => "lg331"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Madhyapur Thimi Municipality",
                "name_np" => "मध्यपुर थिमी नगरपालिका",
                "district_label" => "dis29",
                "label" => "lg332"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Suryabinayak Municipality",
                "name_np" => "सूर्यविनायक नगरपालिका",
                "district_label" => "dis29",
                "label" => "lg333"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kathmandu Metropolitan City",
                "name_np" => "काठमाण्डौं महानगरपालिका",
                "district_label" => "dis30",
                "label" => "lg334"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kageshwari Manohara Municipality",
                "name_np" => "कागेश्वरी मनोहरा नगरपालिका",
                "district_label" => "dis30",
                "label" => "lg335"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kirtipur Municipality",
                "name_np" => "कीर्तिपुर नगरपालिका",
                "district_label" => "dis30",
                "label" => "lg336"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gokarneshwar Municipality",
                "name_np" => "गोकर्णेश्वर नगरपालिका",
                "district_label" => "dis30",
                "label" => "lg337"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chandragiri Municipality",
                "name_np" => "चन्द्रागिरी नगरपालिका",
                "district_label" => "dis30",
                "label" => "lg338"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tokha Municipality",
                "name_np" => "टोखा नगरपालिका",
                "district_label" => "dis30",
                "label" => "lg339"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tarkeshwor Municipality",
                "name_np" => "तारकेश्वर नगरपालिका",
                "district_label" => "dis30",
                "label" => "lg340"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dakshinkali Municipality",
                "name_np" => "दक्षिणकाली नगरपालिका",
                "district_label" => "dis30",
                "label" => "lg341"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nagarjun Municipality",
                "name_np" => "नागार्जुन नगरपालिका",
                "district_label" => "dis30",
                "label" => "lg342"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Budhanilkantha Municipality",
                "name_np" => "बुढानिलकण्ठ नगरपालिका",
                "district_label" => "dis30",
                "label" => "lg343"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shankharapur Municipality",
                "name_np" => "शङ्खरापुर नगरपालिका",
                "district_label" => "dis30",
                "label" => "lg344"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Uttar Gaya Rural Municipality",
                "name_np" => "उत्तरगया गाउँपालिका",
                "district_label" => "dis31",
                "label" => "lg345"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kalika Rural Municipality",
                "name_np" => "कालिका गाउँपालिका",
                "district_label" => "dis31",
                "label" => "lg346"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gosaikunda Rural Municipality",
                "name_np" => "गोसाईकुण्ड गाउँपालिका",
                "district_label" => "dis31",
                "label" => "lg347"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Naukunda Rural Municipality",
                "name_np" => "नौकुण्ड गाउँपालिका",
                "district_label" => "dis31",
                "label" => "lg348"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Parvati Kunda Rural Municipality",
                "name_np" => "पार्वतीकुण्ड गाउँपालिका",
                "district_label" => "dis31",
                "label" => "lg349"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bidur Municipality",
                "name_np" => "विदुर नगरपालिका",
                "district_label" => "dis32",
                "label" => "lg350"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Belkotgadhi Municipality",
                "name_np" => "बेलकोटगढी नगरपालिका",
                "district_label" => "dis32",
                "label" => "lg351"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kakani Rural Municipality",
                "name_np" => "ककनी गाउँपालिका",
                "district_label" => "dis32",
                "label" => "lg352"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kispang Rural Municipality",
                "name_np" => "किस्पाङ गाउँपालिका",
                "district_label" => "dis32",
                "label" => "lg353"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tadi Rural Municipality",
                "name_np" => "तादी गाउँपालिका",
                "district_label" => "dis32",
                "label" => "lg354"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tarkeshwor Rural Municipality",
                "name_np" => "तारकेश्वर गाउँपालिका",
                "district_label" => "dis32",
                "label" => "lg355"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dupcheshwar Rural Municipality",
                "name_np" => "दुप्चेश्वर गाउँपालिका",
                "district_label" => "dis32",
                "label" => "lg356"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Panchakanya Rural Municipality",
                "name_np" => "पञ्चकन्या गाउँपालिका",
                "district_label" => "dis32",
                "label" => "lg357"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Likhu Rural Municipality",
                "name_np" => "लिखु गाउँपालिका",
                "district_label" => "dis32",
                "label" => "lg358"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Meghang Rural Municipality",
                "name_np" => "मेघाङ गाउँपालिका",
                "district_label" => "dis32",
                "label" => "lg359"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shivapuri Rural Municipality",
                "name_np" => "शिवपुरी गाउँपालिका",
                "district_label" => "dis32",
                "label" => "lg360"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Suryagadhi Rural Municipality",
                "name_np" => "सुर्यगढी गाउँपालिका",
                "district_label" => "dis32",
                "label" => "lg361"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhunibeshi Municipality",
                "name_np" => "धुनीबेंशी नगरपालिका",
                "district_label" => "dis33",
                "label" => "lg362"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nilkantha Municipality",
                "name_np" => "नीलकण्ठ नगरपालिका",
                "district_label" => "dis33",
                "label" => "lg363"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khaniyabas Rural Municipality",
                "name_np" => "खनियाबास गाँउपालिका",
                "district_label" => "dis33",
                "label" => "lg364"
            ],

            ////////////////////////////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Gajuri Rural Municipality",
                "name_np" => "गजुरी गाउँपालिका",
                "district_label" => "dis33",
                "label" => "lg365"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Galchi Rural Municipality",
                "name_np" => "गल्छी गाउँपालिका",
                "district_label" => "dis33",
                "label" => "lg366"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gangajamuna Rural Municipality",
                "name_np" => "गङ्गाजमुना गाँउपालिका",
                "district_label" => "dis33",
                "label" => "lg367"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jwalamukhi Rural Municipality",
                "name_np" => "ज्वालामूखी गाउँपालिका",
                "district_label" => "dis33",
                "label" => "lg368"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Thakre Rural Municipality",
                "name_np" => "थाक्रे गाउँपालिका",
                "district_label" => "dis33",
                "label" => "lg369"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Netrawati Rural Municipality",
                "name_np" => "नेत्रावती गाँउपालिका",
                "district_label" => "dis33",
                "label" => "lg370"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Benighat Rorang Rural Municipality",
                "name_np" => "बेनीघाट रोराङ्ग गाँउपालिका",
                "district_label" => "dis33",
                "label" => "lg371"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ruby Valley Rural Municipality",
                "name_np" => "रुवी भ्याली गाउँपालिका",
                "district_label" => "dis33",
                "label" => "lg372"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Siddhalek Rural Municipality",
                "name_np" => "सिद्धलेक गाउँपालिका",
                "district_label" => "dis33",
                "label" => "lg373"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tripurasundari Rural Municipality",
                "name_np" => "त्रिपुरासुन्दरी गाउँपालिका",
                "district_label" => "dis33",
                "label" => "lg374"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Hetauda Sub-Metropolitan City",
                "name_np" => "हेटौँडा उपमहानगरपालिका",
                "district_label" => "dis34",
                "label" => "lg375"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Thaha Municipality",
                "name_np" => "थाहा नगरपालिका",
                "district_label" => "dis34",
                "label" => "lg376"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Indrasarowar Rural Municipality",
                "name_np" => "र्इन्द्रसरोवर गाउँपालिका",
                "district_label" => "dis34",
                "label" => "lg377"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kailash Rural Municipality",
                "name_np" => "कैलाश गाउँपालिका",
                "district_label" => "dis34",
                "label" => "lg378"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bakaya Rural Municipality",
                "name_np" => "बकैया गाँउपालिका",
                "district_label" => "dis34",
                "label" => "lg379"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bagmati Rural Municipality",
                "name_np" => "वाग्मती गाउँपालिका",
                "district_label" => "dis34",
                "label" => "lg380"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhimphedi Rural Municipality",
                "name_np" => "भिमफेदी गाउँपालिका",
                "district_label" => "dis34",
                "label" => "lg381"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Makwanpurgadhi Rural Municipality",
                "name_np" => "मकवानपुरगढी गाँउपालिका",
                "district_label" => "dis34",
                "label" => "lg382"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Manahari Rural Municipality",
                "name_np" => "मनहरी गाउँपालिका",
                "district_label" => "dis34",
                "label" => "lg383"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Raksirang Rural Municipality",
                "name_np" => "राक्सिराङ्ग गाउँपालिका",
                "district_label" => "dis34",
                "label" => "lg384"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bharatpur Metropolitan City",
                "name_np" => "भरतपुर महानगरपालिका",
                "district_label" => "dis35",
                "label" => "lg385"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kalika Municipality",
                "name_np" => "कालिका नगरपालिका",
                "district_label" => "dis35",
                "label" => "lg386"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khairahani Municipality",
                "name_np" => "खैरहनी नगरपालिका",
                "district_label" => "dis35",
                "label" => "lg387"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Madi Municipality",
                "name_np" => "माडी नगरपालिका",
                "district_label" => "dis35",
                "label" => "lg388"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ratnanagar Municipality",
                "name_np" => "रत्ननगर नगरपालिका",
                "district_label" => "dis35",
                "label" => "lg389"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rapti Municipality",
                "name_np" => "राप्ती नगरपालिका",
                "district_label" => "dis35",
                "label" => "lg390"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ichchhakamana Rural Municipality",
                "name_np" => "इच्छाकामना गाउँपालिका",
                "district_label" => "dis35",
                "label" => "lg391"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gorkha Municipality",
                "name_np" => "गोरखा नगरपालिका",
                "district_label" => "dis36",
                "label" => "lg392"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Palungtar Municipality",
                "name_np" => "पालुङटार नगरपालिका",
                "district_label" => "dis36",
                "label" => "lg393"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sulikot Rural Municipality",
                "name_np" => "सुलीकोट गाउँपालिका",
                "district_label" => "dis36",
                "label" => "lg394"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Siranchok Rural Municipality",
                "name_np" => "सिरानचोक गाउँपालिका",
                "district_label" => "dis36",
                "label" => "lg395"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ajirkot Rural Municipality",
                "name_np" => "अजिरकोट गाउँपालिका",
                "district_label" => "dis36",
                "label" => "lg396"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aarughat Rural Municipality",
                "name_np" => "आरूघाट गाउँपालिका",
                "district_label" => "dis36",
                "label" => "lg397"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gandaki Rural Municipality",
                "name_np" => "गण्डकी गाउँपालिका",
                "district_label" => "dis36",
                "label" => "lg398"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chumanubri Rural Municipality",
                "name_np" => "चुमनुव्री गाउँपालिका",
                "district_label" => "dis36",
                "label" => "lg399"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dharche Rural Municipality",
                "name_np" => "धार्चे गाउँपालिका",
                "district_label" => "dis36",
                "label" => "lg400"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhimsenthapa Rural Municipality",
                "name_np" => "भिमसेनथापा गाउँपालिका",
                "district_label" => "dis36",
                "label" => "lg401"
            ],

            ///////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Shahid Lakhan Rural Municipality",
                "name_np" => "शहिद लखन गाउँपालिका",
                "district_label" => "dis36",
                "label" => "lg402"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Besishahar Municipality",
                "name_np" => "बेसीशहर नगरपालिका",
                "district_label" => "dis37",
                "label" => "lg403"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Madhya Nepal Municipality",
                "name_np" => "मध्यनेपाल नगरपालिका",
                "district_label" => "dis37",
                "label" => "lg404"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rainas Municipality",
                "name_np" => "रार्इनास नगरपालिका",
                "district_label" => "dis37",
                "label" => "lg405"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sundarbazar Municipality",
                "name_np" => "सुन्दरबजार नगरपालिका",
                "district_label" => "dis37",
                "label" => "lg406"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kwholasothar Rural Municipality",
                "name_np" => "क्व्होलासोथार गाउँपालिका",
                "district_label" => "dis37",
                "label" => "lg407"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dudhpokhari Rural Municipality",
                "name_np" => "दूधपोखरी गाउँपालिका",
                "district_label" => "dis37",
                "label" => "lg408"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dordi Rural Municipality",
                "name_np" => "दोर्दी गाउँपालिका",
                "district_label" => "dis37",
                "label" => "lg409"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Marsyangdi Rural Municipality",
                "name_np" => "मर्स्याङदी गाउँपालिका",
                "district_label" => "dis37",
                "label" => "lg410"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhanu Municipality",
                "name_np" => "भानु नगरपालिका",
                "district_label" => "dis38",
                "label" => "lg411"
            ],

            //////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Bhimad Municipality",
                "name_np" => "भिमाद नगरपालिका",
                "district_label" => "dis38",
                "label" => "lg412"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Byas Municipality",
                "name_np" => "व्यास नगरपालिका",
                "district_label" => "dis38",
                "label" => "lg413"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shuklagandaki Municipality",
                "name_np" => "शुक्लागण्डकी नगरपालिका",
                "district_label" => "dis38",
                "label" => "lg414"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aabukhaireni Rural Municipality",
                "name_np" => "आँबुखैरेनी गाउँपालिका",
                "district_label" => "dis38",
                "label" => "lg415"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rishing Rural Municipality",
                "name_np" => "ऋषिङ्ग गाउँपालिका",
                "district_label" => "dis38",
                "label" => "lg416"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ghiring Rural Municipality",
                "name_np" => "घिरिङ गाउँपालिका",
                "district_label" => "dis38",
                "label" => "lg417"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Devghat Rural Municipality",
                "name_np" => "देवघाट गाउँपालिका",
                "district_label" => "dis38",
                "label" => "lg418"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Myagde Rural Municipality",
                "name_np" => "म्याग्दे गाउँपालिका",
                "district_label" => "dis38",
                "label" => "lg419"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bandipur Rural Municipality",
                "name_np" => "बन्दिपुर गाउँपालिका",
                "district_label" => "dis38",
                "label" => "lg420"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Galyang Municipality",
                "name_np" => "गल्याङ नगरपालिका",
                "district_label" => "dis39",
                "label" => "lg421"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chapakot Municipality",
                "name_np" => "चापाकोट नगरपालिका",
                "district_label" => "dis39",
                "label" => "lg422"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Putalibazar Municipality",
                "name_np" => "पुतलीबजार नगरपालिका",
                "district_label" => "dis39",
                "label" => "lg423"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bheerkot Municipality",
                "name_np" => "भीरकोट नगरपालिका",
                "district_label" => "dis39",
                "label" => "lg424"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Waling Municipality",
                "name_np" => "वालिङ नगरपालिका",
                "district_label" => "dis39",
                "label" => "lg425"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Arjun Chaupari Rural Municipality",
                "name_np" => "अर्जुनचौपारी गाउँपालिका",
                "district_label" => "dis39",
                "label" => "lg426"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aandhikhola Rural Municipality",
                "name_np" => "आँधिखोला गाउँपालिका",
                "district_label" => "dis39",
                "label" => "lg427"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kaligandaki Rural Municipality",
                "name_np" => "कालीगण्डकी गाउँपालिका",
                "district_label" => "dis39",
                "label" => "lg428"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Fedikhola Rural Municipality",
                "name_np" => "फेदीखोला गाउँपालिका",
                "district_label" => "dis39",
                "label" => "lg429"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Biruwa Rural Municipality",
                "name_np" => "बिरुवा गाउँपालिका",
                "district_label" => "dis39",
                "label" => "lg430"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Harinas Rural Municipality",
                "name_np" => "हरिनास गाउँपालिका",
                "district_label" => "dis39",
                "label" => "lg431"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pokhara Lekhnath Metropolitan City",
                "name_np" => "पोखरा लेखनाथ महानगरपालिका",
                "district_label" => "dis40",
                "label" => "lg432"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Annapurna Rural Municipality",
                "name_np" => "अन्नपूर्ण गाउँपालिका",
                "district_label" => "dis40",
                "label" => "lg433"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Machhapuchhre Rural Municipality",
                "name_np" => "माछापुच्छ्रे गाउँपालिका",
                "district_label" => "dis40",
                "label" => "lg434"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Madi Rural Municipality",
                "name_np" => "मादी गाउँपालिका",
                "district_label" => "dis40",
                "label" => "lg435"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rupa Rural Municipality",
                "name_np" => "रूपा गाउँपालिका",
                "district_label" => "dis40",
                "label" => "lg436"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chame Rural Municipality",
                "name_np" => "चामे गाउँपालिका",
                "district_label" => "dis41",
                "label" => "lg437"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Narfu Rural Municipality",
                "name_np" => "नार्फु गाउँपालिका",
                "district_label" => "dis41",
                "label" => "lg438"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nashong Rural Municipality",
                "name_np" => "नाशोङ गाउँपालिका",
                "district_label" => "dis41",
                "label" => "lg439"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nesyang Rural Municipality",
                "name_np" => "नेस्याङ गाउँपालिका",
                "district_label" => "dis41",
                "label" => "lg440"
            ],

            ////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Gharpajhong Rural Municipality",
                "name_np" => "घरपझोङ गाउँपालिका",
                "district_label" => "dis42",
                "label" => "lg441"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Thasang Rural Municipality",
                "name_np" => "थासाङ गाउँपालिका",
                "district_label" => "dis42",
                "label" => "lg442"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dalome Rural Municipality",
                "name_np" => "दालोमे गाउँपालिका",
                "district_label" => "dis42",
                "label" => "lg443"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lomanthang Rural Municipality",
                "name_np" => "लोमन्थाङ गाउँपालिका",
                "district_label" => "dis42",
                "label" => "lg444"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Barhagaun Muktichhetra Rural Municipality",
                "name_np" => "वाह्रगाउँ मुक्तिक्षेत्र गाउँपालिका",
                "district_label" => "dis42",
                "label" => "lg445"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Beni Municipality",
                "name_np" => "बेनी नगरपालिका",
                "district_label" => "dis43",
                "label" => "lg446"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Annapurna Rural Municipality",
                "name_np" => "अन्नपूर्ण गाउँपालिका",
                "district_label" => "dis43",
                "label" => "lg447"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhaulagiri Rural Municipality",
                "name_np" => "धवलागिरी गाउँपालिका",
                "district_label" => "dis43",
                "label" => "lg448"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mangala Rural Municipality",
                "name_np" => "मंगला गाउँपालिका",
                "district_label" => "dis43",
                "label" => "lg449"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Malika Rural Municipality",
                "name_np" => "मालिका गाउँपालिका",
                "district_label" => "dis43",
                "label" => "lg450"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Raghuganga Rural Municipality",
                "name_np" => "रघुगंगा गाउँपालिका",
                "district_label" => "dis43",
                "label" => "lg451"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kusma Municipality",
                "name_np" => "कुश्मा नगरपालिका",
                "district_label" => "dis44",
                "label" => "lg452"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Phalewas Municipality",
                "name_np" => "फलेवास नगरपालिका",
                "district_label" => "dis44",
                "label" => "lg453"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jaljala Rural Municipality",
                "name_np" => "जलजला गाउँपालिका",
                "district_label" => "dis44",
                "label" => "lg454"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Paiyun Rural Municipality",
                "name_np" => "पैयूं गाउँपालिका",
                "district_label" => "dis44",
                "label" => "lg455"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahashila Rural Municipality",
                "name_np" => "महाशिला गाउँपालिका",
                "district_label" => "dis44",
                "label" => "lg456"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Modi Rural Municipality",
                "name_np" => "मोदी गाउँपालिका",
                "district_label" => "dis44",
                "label" => "lg457"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bihadi Rural Municipality",
                "name_np" => "विहादी गाउँपालिका",
                "district_label" => "dis44",
                "label" => "lg458"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Baglung Municipality",
                "name_np" => "बागलुङ नगरपालिका",
                "district_label" => "dis45",
                "label" => "lg459"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Galkot Municipality",
                "name_np" => "गल्कोट नगरपालिका",
                "district_label" => "dis45",
                "label" => "lg460"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jaimini Municipality",
                "name_np" => "जैमिनी नगरपालिका",
                "district_label" => "dis45",
                "label" => "lg461"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhorpatan Municipality",
                "name_np" => "ढोरपाटन नगरपालिका",
                "district_label" => "dis45",
                "label" => "lg462"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bareng Rural Municipality",
                "name_np" => "वरेङ गाउँपालिका",
                "district_label" => "dis45",
                "label" => "lg463"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kathekhola Rural Municipality",
                "name_np" => "काठेखोला गाउँपालिका",
                "district_label" => "dis45",
                "label" => "lg464"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Taman Khola Rural Municipality",
                "name_np" => "तमानखोला गाउँपालिका",
                "district_label" => "dis45",
                "label" => "lg465"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tara Khola Rural Municipality",
                "name_np" => "ताराखोला गाउँपालिका",
                "district_label" => "dis45",
                "label" => "lg466"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nisikhola Rural Municipality",
                "name_np" => "निसीखोला गाउँपालिका",
                "district_label" => "dis45",
                "label" => "lg467"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Badigad Rural Municipality",
                "name_np" => "वडिगाड गाउँपालिका",
                "district_label" => "dis45",
                "label" => "lg468"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kawasoti Municipality",
                "name_np" => "कावासोती नगरपालिका",
                "district_label" => "dis46",
                "label" => "lg469"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gaindakot Municipality",
                "name_np" => "गैंडाकोट नगरपालिका",
                "district_label" => "dis46",
                "label" => "lg470"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Devchuli Municipality",
                "name_np" => "देवचुली नगरपालिका",
                "district_label" => "dis46",
                "label" => "lg471"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Madhyabindu Municipality",
                "name_np" => "मध्यविन्दु नगरपालिका",
                "district_label" => "dis46",
                "label" => "lg472"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bungdikali Rural Municipality",
                "name_np" => "बुङ्दीकाली गाउँपालिका",
                "district_label" => "dis46",
                "label" => "lg473"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bulingtar Rural Municipality",
                "name_np" => "बुलिङटार गाउँपालिका",
                "district_label" => "dis46",
                "label" => "lg474"
            ],

            ////////////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Binayi Tribeni Rural Municipality",
                "name_np" => "विनयी-त्रिवेणी गाउँपालिका",
                "district_label" => "dis46",
                "label" => "lg475"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Hupsekot Rural Municipality",
                "name_np" => "हुप्सेकोट गाउँपालिका",
                "district_label" => "dis46",
                "label" => "lg476"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Musikot Municipality",
                "name_np" => "मुसिकोट नगरपालिका",
                "district_label" => "dis48",
                "label" => "lg479"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Resunga Municipality",
                "name_np" => "रेसुङ्गा नगरपालिका",
                "district_label" => "dis48",
                "label" => "lg480"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Isma Rural Municipality",
                "name_np" => "इस्मा गाउँपालिका",
                "district_label" => "dis48",
                "label" => "lg481"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kaligandaki Rural Municipality",
                "name_np" => "कालीगण्डकी गाउँपालिका",
                "district_label" => "dis48",
                "label" => "lg482"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gulmi Durbar Rural Municipality",
                "name_np" => "गुल्मी दरबार गाउँपालिका",
                "district_label" => "dis48",
                "label" => "lg483"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Satyawati Rural Municipality",
                "name_np" => "सत्यवती गाउँपालिका",
                "district_label" => "dis48",
                "label" => "lg484"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chandrakot Rural Municipality",
                "name_np" => "चन्द्रकोट गाउँपालिका",
                "district_label" => "dis48",
                "label" => "lg485"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ruru Rural Municipality",
                "name_np" => "रुरु गाउँपालिका",
                "district_label" => "dis48",
                "label" => "lg486"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chhatrakot Rural Municipality",
                "name_np" => "छत्रकोट गाउँपालिका",
                "district_label" => "dis48",
                "label" => "lg487"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhurkot Rural Municipality",
                "name_np" => "धुर्कोट गाउँपालिका",
                "district_label" => "dis48",
                "label" => "lg488"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Madane Rural Municipality",
                "name_np" => "मदाने गाउँपालिका",
                "district_label" => "dis48",
                "label" => "lg489"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Malika Rural Municipality",
                "name_np" => "मालिका गाउँपालिका",
                "district_label" => "dis48",
                "label" => "lg490"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rampur Municipality",
                "name_np" => "रामपुर नगरपालिका",
                "district_label" => "dis49",
                "label" => "lg491"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tansen Municipality",
                "name_np" => "तानसेन नगरपालिका",
                "district_label" => "dis49",
                "label" => "lg492"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nisdi Rural Municipality",
                "name_np" => "निस्दी गाउँपालिका",
                "district_label" => "dis49",
                "label" => "lg493"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Purba Khola Rural Municipality",
                "name_np" => "पुर्वखोला गाउँपालिका",
                "district_label" => "dis49",
                "label" => "lg494"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rambha Rural Municipality",
                "name_np" => "रम्भा गाउँपालिका",
                "district_label" => "dis49",
                "label" => "lg495"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mathagadhi Rural Municipality",
                "name_np" => "माथागढी गाउँपालिका",
                "district_label" => "dis49",
                "label" => "lg496"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tinau Rural Municipality",
                "name_np" => "तिनाउ गाउँपालिका",
                "district_label" => "dis49",
                "label" => "lg497"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Baganaskali Rural Municipality",
                "name_np" => "बगनासकाली गाउँपालिका",
                "district_label" => "dis49",
                "label" => "lg498"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ribdikot Rural Municipality",
                "name_np" => "रिब्दीकोट गाउँपालिका",
                "district_label" => "dis49",
                "label" => "lg499"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rainadevi Chhahara Rural Municipality",
                "name_np" => "रैनादेवी छहरा गाँउपालिका",
                "district_label" => "dis49",
                "label" => "lg500"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bardaghat Municipality",
                "name_np" => "बर्दघाट नगरपालिका",
                "district_label" => "dis76",
                "label" => "lg501"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ramgram Municipality",
                "name_np" => "रामग्राम नगरपालिका",
                "district_label" => "dis76",
                "label" => "lg502"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sunwal Municipality",
                "name_np" => "सुनवल नगरपालिका",
                "district_label" => "dis76",
                "label" => "lg503"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Susta Rural Municipality",
                "name_np" => "सुस्ता गाउँपालिका",
                "district_label" => "dis76",
                "label" => "lg504"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Palhinandan Rural Municipality",
                "name_np" => "पाल्हीनन्दन गाउँपालिका",
                "district_label" => "dis76",
                "label" => "lg505"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pratappur Rural Municipality",
                "name_np" => "प्रतापपुर गाउँपालिका",
                "district_label" => "dis76",
                "label" => "lg506"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sarawal Rural Municipality",
                "name_np" => "सरावल गाउँपालिका",
                "district_label" => "dis76",
                "label" => "lg507"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Butwal Sub-Metropolitan City",
                "name_np" => "बुटवल उपमहानगरपालिका",
                "district_label" => "dis50",
                "label" => "lg508"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Devdaha Municipality",
                "name_np" => "देवदह नगरपालिका",
                "district_label" => "dis50",
                "label" => "lg509"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lumbini Sanskritik Municipality",
                "name_np" => "लुम्बिनी सांस्कृतिक नगरपालिका",
                "district_label" => "dis50",
                "label" => "lg510"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sainamaina Municipality",
                "name_np" => "सैनामैना नगरपालिका",
                "district_label" => "dis50",
                "label" => "lg511"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Siddharthanagar Municipality",
                "name_np" => "सिद्धार्थनगर नगरपालिका",
                "district_label" => "dis50",
                "label" => "lg512"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tilottama Municipality",
                "name_np" => "तिलोत्तमा नगरपालिका",
                "district_label" => "dis50",
                "label" => "lg513"
            ],

            ////////////////////////////////////////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Gaidahawa Rural Municipality",
                "name_np" => "गैडहवा गाउँपालिका",
                "district_label" => "dis50",
                "label" => "lg514"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kanchan Rural Municipality",
                "name_np" => "कन्चन गाउँपालिका",
                "district_label" => "dis50",
                "label" => "lg515"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kotahimai Rural Municipality",
                "name_np" => "कोटहीमार्इ गाउँपालिका",
                "district_label" => "dis50",
                "label" => "lg516"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Marchawari Rural Municipality",
                "name_np" => "मर्चवारी गाउँपालिका",
                "district_label" => "dis50",
                "label" => "lg517"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mayadevi Rural Municipality",
                "name_np" => "मायादेवी गाउँपालिका",
                "district_label" => "dis50",
                "label" => "lg518"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Omsatiya Rural Municipality",
                "name_np" => "ओमसतिया गाउँपालिका",
                "district_label" => "dis50",
                "label" => "lg519"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rohini Rural Municipality",
                "name_np" => "रोहिणी गाउँपालिका",
                "district_label" => "dis50",
                "label" => "lg520"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sammarimai Rural Municipality",
                "name_np" => "सम्मरीमार्इ गाउँपालिका",
                "district_label" => "dis50",
                "label" => "lg521"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Siyari Rural Municipality",
                "name_np" => "सियारी गाउँपालिका",
                "district_label" => "dis50",
                "label" => "lg522"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Suddhodhan Rural Municipality",
                "name_np" => "सुद्धोधन गाउँपालिका",
                "district_label" => "dis50",
                "label" => "lg523"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kapilvastu Municipality",
                "name_np" => "कपिलवस्तु नगरपालिका",
                "district_label" => "dis51",
                "label" => "lg524"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Buddhabhumi Municipality",
                "name_np" => "बुद्धभुमी नगरपालिका",
                "district_label" => "dis51",
                "label" => "lg525"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shivraj Municipality",
                "name_np" => "शिवराज नगरपालिका",
                "district_label" => "dis51",
                "label" => "lg526"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Maharajgunj Municipality",
                "name_np" => "महाराजगंज नगरपालिका",
                "district_label" => "dis51",
                "label" => "lg527"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Krishnanagar Municipality",
                "name_np" => "कृष्णनगर नगरपालिका",
                "district_label" => "dis51",
                "label" => "lg528"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Banganga Municipality",
                "name_np" => "बाणगंगा नगरपालिका",
                "district_label" => "dis51",
                "label" => "lg529"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mayadevi Rural Municipality",
                "name_np" => "मायादेवी गाउँपालिका",
                "district_label" => "dis51",
                "label" => "lg530"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Yashodhara Rural Municipality",
                "name_np" => "यसोधरा गाउँपालिका",
                "district_label" => "dis51",
                "label" => "lg531"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shuddhodhan Rural Municipality",
                "name_np" => "शुद्धोधन गाउँपालिका",
                "district_label" => "dis51",
                "label" => "lg532"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bijayanagar Rural Municipality",
                "name_np" => "विजयनगर गाउँपालिका",
                "district_label" => "dis51",
                "label" => "lg533"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sandhikharka Municipality",
                "name_np" => "सन्धिखर्क नगरपालिका",
                "district_label" => "dis52",
                "label" => "lg534"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sitganga Municipality",
                "name_np" => "शितगंगा नगरपालिका",
                "district_label" => "dis52",
                "label" => "lg535"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhumikastan Municipality",
                "name_np" => "भुमिकास्थान नगरपालिका",
                "district_label" => "dis52",
                "label" => "lg536"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chhatradev Rural Municipality",
                "name_np" => "छत्रदेव गाउँपालिका",
                "district_label" => "dis52",
                "label" => "lg537"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Panini Rural Municipality",
                "name_np" => "पाणिनी गाउँपालिका",
                "district_label" => "dis52",
                "label" => "lg538"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Malarani Rural Municipality",
                "name_np" => "मालारानी गाउँपालिका",
                "district_label" => "dis52",
                "label" => "lg539"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pyuthan Municipality",
                "name_np" => "प्यूठान नगरपालिका",
                "district_label" => "dis53",
                "label" => "lg540"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Swargadwari Municipality",
                "name_np" => "स्वर्गद्वारी नगरपालिका",
                "district_label" => "dis53",
                "label" => "lg541"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gaumukhi Rural Municipality",
                "name_np" => "गौमुखी गाउँपालिका",
                "district_label" => "dis53",
                "label" => "lg542"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mandavi Rural Municipality",
                "name_np" => "माण्डवी गाउँपालिका",
                "district_label" => "dis53",
                "label" => "lg543"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sarumarani Rural Municipality",
                "name_np" => "सरुमारानी गाउँपालिका",
                "district_label" => "dis53",
                "label" => "lg544"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mallarani Rural Municipality",
                "name_np" => "मल्लरानी गाउँपालिका",
                "district_label" => "dis53",
                "label" => "lg545"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Naubahini Rural Municipality",
                "name_np" => "नौबहिनी गाउँपालिका",
                "district_label" => "dis53",
                "label" => "lg546"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jhimruk Rural Municipality",
                "name_np" => "झिमरुक गाउँपालिका",
                "district_label" => "dis53",
                "label" => "lg547"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aairawati Rural Municipality",
                "name_np" => "ऐरावती गाउँपालिका",
                "district_label" => "dis53",
                "label" => "lg548"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rolpa Municipality",
                "name_np" => "रोल्पा नगरपालिका",
                "district_label" => "dis54",
                "label" => "lg549"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Triveni Rural Municipality",
                "name_np" => "त्रिवेणी गाउँपालिका",
                "district_label" => "dis54",
                "label" => "lg550"
            ],

            /////////////////////////////////
            [
                "id" => Str::uuid(),
                "name_en" => "Duikhola Rural Municipality",
                "name_np" => "दुईखोली गाउँपालिका",
                "district_label" => "dis54",
                "label" => "lg551"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Madi Rural Municipality",
                "name_np" => "माडी गाउँपालिका",
                "district_label" => "dis54",
                "label" => "lg552"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Runtigadhi Rural Municipality",
                "name_np" => "रुन्टीगढी गाउँपालिका",
                "district_label" => "dis54",
                "label" => "lg553"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lungri Rural Municipality",
                "name_np" => "लुङग्री गाउँपालिका",
                "district_label" => "dis54",
                "label" => "lg554"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sukidaha Rural Municipality",
                "name_np" => "सुकिदह गाउँपालिका",
                "district_label" => "dis54",
                "label" => "lg555"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sunchhahari Rural Municipality",
                "name_np" => "सुनछहरी गाउँपालिका",
                "district_label" => "dis54",
                "label" => "lg556"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Suvarnawati Rural Municipality",
                "name_np" => "सुवर्णावती गाउँपालिका",
                "district_label" => "dis54",
                "label" => "lg557"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Thabang Rural Municipality",
                "name_np" => "थबाङ गाउँपालिका",
                "district_label" => "dis54",
                "label" => "lg558"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Putha Uttarganga Rural Municipality",
                "name_np" => "पुथा उत्तरगंगा गाउँपालिका",
                "district_label" => "dis47",
                "label" => "lg559"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tulsipur Sub-Metropolitan City",
                "name_np" => "तुल्सीपुर उपमहानगरपालिका",
                "district_label" => "dis55",
                "label" => "lg560"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ghorahi Sub-Metropolitan City",
                "name_np" => "घोराही उपमहानगरपालिका",
                "district_label" => "dis55",
                "label" => "lg561"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lamahi Municipality",
                "name_np" => "लमही नगरपालिका",
                "district_label" => "dis55",
                "label" => "lg562"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Banglachuli Rural Municipality",
                "name_np" => "बंगलाचुली गाँउपालिका",
                "district_label" => "dis55",
                "label" => "lg563"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dangisharan Rural Municipality",
                "name_np" => "दंगीशरण गाउँपालिका",
                "district_label" => "dis55",
                "label" => "lg564"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gadhawa Rural Municipality",
                "name_np" => "गढवा गाउँपालिका",
                "district_label" => "dis55",
                "label" => "lg565"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rajpur Rural Municipality",
                "name_np" => "राजपुर गाउँपालिका",
                "district_label" => "dis55",
                "label" => "lg566"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rapti Rural Municipality",
                "name_np" => "राप्ती गाउँपालिका",
                "district_label" => "dis55",
                "label" => "lg567"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shantinagar Rural Municipality",
                "name_np" => "शान्तिनगर गाउँपालिका",
                "district_label" => "dis55",
                "label" => "lg568"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Babai Rural Municipality",
                "name_np" => "बबई गाउँपालिका",
                "district_label" => "dis55",
                "label" => "lg569"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nepalgunj Sub-Metropolitan City",
                "name_np" => "नेपालगंज उपमहानगरपालिका",
                "district_label" => "dis56",
                "label" => "lg570"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kohalpur Municipality",
                "name_np" => "कोहलपुर नगरपालिका",
                "district_label" => "dis56",
                "label" => "lg571"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Narainapur Rural Municipality",
                "name_np" => "नरैनापुर गाउँपालिका",
                "district_label" => "dis56",
                "label" => "lg572"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rapti Sonari Rural Municipality",
                "name_np" => "राप्तीसोनारी गाउँपालिका",
                "district_label" => "dis56",
                "label" => "lg573"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Baijanath Rural Municipality",
                "name_np" => "बैजनाथ गाउँपालिका",
                "district_label" => "dis56",
                "label" => "lg574"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khajura Rural Municipality",
                "name_np" => "खजुरा गाउँपालिका",
                "district_label" => "dis56",
                "label" => "lg575"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Duduwa Rural Municipality",
                "name_np" => "डुडुवा गाउँपालिका",
                "district_label" => "dis56",
                "label" => "lg576"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Janaki Rural Municipality",
                "name_np" => "जानकी गाउँपालिका",
                "district_label" => "dis56",
                "label" => "lg577"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gulariya Municipality",
                "name_np" => "गुलरिया नगरपालिका",
                "district_label" => "dis57",
                "label" => "lg578"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Madhuwan Municipality",
                "name_np" => "मधुवन नगरपालिका",
                "district_label" => "dis57",
                "label" => "lg579"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rajapur Municipality",
                "name_np" => "राजापुर नगरपालिका",
                "district_label" => "dis57",
                "label" => "lg580"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Thakurbaba Municipality",
                "name_np" => "ठाकुरबाबा नगरपालिका",
                "district_label" => "dis57",
                "label" => "lg581"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bansgadhi Municipality",
                "name_np" => "बाँसगढी नगरपालिका",
                "district_label" => "dis57",
                "label" => "lg582"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Barbardiya Municipality",
                "name_np" => "बारबर्दिया नगरपालिका",
                "district_label" => "dis57",
                "label" => "lg583"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Badhiyaatal Rural Municipality",
                "name_np" => "बढैयाताल गाउँपालिका",
                "district_label" => "dis57",
                "label" => "lg584"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Geruwa Rural Municipality",
                "name_np" => "गेरुवा गाउँपालिका",
                "district_label" => "dis57",
                "label" => "lg585"
            ],

            ///////////////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Musikot Municipality",
                "name_np" => "मुसिकोट नगरपालिका",
                "district_label" => "dis77",
                "label" => "lg586"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chaurjahari Municipality",
                "name_np" => "चौरजहारी नगरपालिका",
                "district_label" => "dis77",
                "label" => "lg587"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aathbiskot Municipality",
                "name_np" => "आठबिसकोट नगरपालिका",
                "district_label" => "dis77",
                "label" => "lg588"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Banfikot Rural Municipality",
                "name_np" => "बाँफिकोट गाउँपालिका",
                "district_label" => "dis77",
                "label" => "lg589"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Triveni Rural Municipality",
                "name_np" => "त्रिवेणी गाउँपालिका",
                "district_label" => "dis77",
                "label" => "lg590"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sani Bheri Rural Municipality",
                "name_np" => "सानी भेरी गाउँपालिका",
                "district_label" => "dis77",
                "label" => "lg591"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sharada Municipality",
                "name_np" => "शारदा नगरपालिका",
                "district_label" => "dis58",
                "label" => "lg592"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bagchaur Municipality",
                "name_np" => "बागचौर नगरपालिका",
                "district_label" => "dis58",
                "label" => "lg593"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bangad Kupinde Municipality",
                "name_np" => "बनगाड कुपिण्डे नगरपालिका",
                "district_label" => "dis58",
                "label" => "lg594"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kalimati Rural Municipality",
                "name_np" => "कालिमाटी गाउँपालिका",
                "district_label" => "dis58",
                "label" => "lg595"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Triveni Rural Municipality",
                "name_np" => "त्रिवेणी गाउँपालिका",
                "district_label" => "dis58",
                "label" => "lg596"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kapurgot Rural Municipality",
                "name_np" => "कपुरकोट गाउँपालिका",
                "district_label" => "dis58",
                "label" => "lg597"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chhatreshwori Rural Municipality",
                "name_np" => "छत्रेश्वरी गाउँपालिका",
                "district_label" => "dis58",
                "label" => "lg598"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhorchaur Rural Municipality",
                "name_np" => "ढोरचौर गाउँपालिका",
                "district_label" => "dis58",
                "label" => "lg599"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kumakhmalika Rural Municipality",
                "name_np" => "कुमाखमालिका गाउँपालिका",
                "district_label" => "dis58",
                "label" => "lg600"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Darma Rural Municipality",
                "name_np" => "दार्मा गाउँपालिका",
                "district_label" => "dis58",
                "label" => "lg601"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Birendranagar Municipality",
                "name_np" => "बीरेन्द्रनगर नगरपालिका",
                "district_label" => "dis59",
                "label" => "lg602"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bheriganga Municipality",
                "name_np" => "भेरीगंगा नगरपालिका",
                "district_label" => "dis59",
                "label" => "lg603"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gurbhakot Municipality",
                "name_np" => "गुर्भाकोट नगरपालिका",
                "district_label" => "dis59",
                "label" => "lg604"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Panchpuri Municipality",
                "name_np" => "पञ्चपुरी नगरपालिका",
                "district_label" => "dis59",
                "label" => "lg605"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lekbeshi Municipality",
                "name_np" => "लेकबेशी नगरपालिका",
                "district_label" => "dis59",
                "label" => "lg606"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chaukune Rural Municipality",
                "name_np" => "चौकुने गाउँपालिका",
                "district_label" => "dis59",
                "label" => "lg607"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Barahatal Rural Municipality",
                "name_np" => "बराहताल गाउँपालिका",
                "district_label" => "dis59",
                "label" => "lg608"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chingad Rural Municipality",
                "name_np" => "चिङ्गाड गाउँपालिका",
                "district_label" => "dis59",
                "label" => "lg609"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Simta Rural Municipality",
                "name_np" => "सिम्ता गाउँपालिका",
                "district_label" => "dis59",
                "label" => "lg610"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Narayan Municipality",
                "name_np" => "नारायण नगरपालिका",
                "district_label" => "dis60",
                "label" => "lg611"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dullu Municipality",
                "name_np" => "दुल्लु नगरपालिका",
                "district_label" => "dis60",
                "label" => "lg612"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chamunda Bindrasaini Municipality",
                "name_np" => "चामुण्डा बिन्द्रासैनी नगरपालिका",
                "district_label" => "dis60",
                "label" => "lg613"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Aathbis Municipality",
                "name_np" => "आठबीस नगरपालिका",
                "district_label" => "dis60",
                "label" => "lg614"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhagawatimai Rural Municipality",
                "name_np" => "भगवतीमाई गाउँपालिका",
                "district_label" => "dis60",
                "label" => "lg615"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gurans Rural Municipality",
                "name_np" => "गुराँस गाउँपालिका",
                "district_label" => "dis60",
                "label" => "lg616"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Duneshwor Rural Municipality",
                "name_np" => "डुङ्गेश्वर गाउँपालिका",
                "district_label" => "dis60",
                "label" => "lg617"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Naumule Rural Municipality",
                "name_np" => "नौमुले गाउँपालिका",
                "district_label" => "dis60",
                "label" => "lg618"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahabu Rural Municipality",
                "name_np" => "महाबु गाउँपालिका",
                "district_label" => "dis60",
                "label" => "lg619"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhairavi Rural Municipality",
                "name_np" => "भैरवी गाउँपालिका",
                "district_label" => "dis60",
                "label" => "lg620"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Thantikandh Rural Municipality",
                "name_np" => "ठाँटीकाँध गाउँपालिका",
                "district_label" => "dis60",
                "label" => "lg621"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bheri Municipality",
                "name_np" => "भेरी नगरपालिका",
                "district_label" => "dis61",
                "label" => "lg622"
            ],

            ///////////////////////////////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Chhedagad Municipality",
                "name_np" => "छेडागाड नगरपालिका",
                "district_label" => "dis61",
                "label" => "lg623"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nalagad Municipality",
                "name_np" => "त्रिवेणी नलगाड नगरपालिका",
                "district_label" => "dis61",
                "label" => "lg624"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kuse Rural Municipality",
                "name_np" => "कुसे गाउँपालिका",
                "district_label" => "dis61",
                "label" => "lg625"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Junichande Rural Municipality",
                "name_np" => "जुनीचाँदे गाउँपालिका",
                "district_label" => "dis61",
                "label" => "lg626"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Barekot Rural Municipality",
                "name_np" => "बारेकोट गाउँपालिका",
                "district_label" => "dis61",
                "label" => "lg627"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shivalaya Rural Municipality",
                "name_np" => "शिवालय गाउँपालिका",
                "district_label" => "dis61",
                "label" => "lg628"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Thuli Bheri Municipality",
                "name_np" => "ठुली भेरी नगरपालिका",
                "district_label" => "dis62",
                "label" => "lg629"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tripurasundari Municipality",
                "name_np" => "त्रिपुरासुन्दरी नगरपालिका",
                "district_label" => "dis62",
                "label" => "lg630"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dolpo Buddha Rural Municipality",
                "name_np" => "डोल्पो बुद्ध गाउँपालिका",
                "district_label" => "dis62",
                "label" => "lg631"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shey Phoksundo Rural Municipality",
                "name_np" => "शे फोक्सुण्डो गाउँपालिका",
                "district_label" => "dis62",
                "label" => "lg632"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jagadulla Rural Municipality",
                "name_np" => "जगदुल्ला गाउँपालिका",
                "district_label" => "dis62",
                "label" => "lg633"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mudkechula Rural Municipality",
                "name_np" => "मुड्केचुला गाउँपालिका",
                "district_label" => "dis62",
                "label" => "lg634"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kaike Rural Municipality",
                "name_np" => "काईके गाउँपालिका",
                "district_label" => "dis62",
                "label" => "lg635"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chharka Tangsong Rural Municipality",
                "name_np" => "छार्का ताङसोङ गाउँपालिका",
                "district_label" => "dis62",
                "label" => "lg636"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chandan Nath Municipality",
                "name_np" => "चन्दननाथ नगरपालिका",
                "district_label" => "dis63",
                "label" => "lg637"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kanakasundari Rural Municipality",
                "name_np" => "कनकासुन्दरी गाउँपालिका",
                "district_label" => "dis63",
                "label" => "lg638"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sinja Rural Municipality",
                "name_np" => "सिंजा गाउँपालिका",
                "district_label" => "dis63",
                "label" => "lg639"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Hima Rural Municipality",
                "name_np" => "हिमा गाउँपालिका",
                "district_label" => "dis63",
                "label" => "lg640"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tila Rural Municipality",
                "name_np" => "तिला गाउँपालिका",
                "district_label" => "dis63",
                "label" => "lg641"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Guthichaur Rural Municipality",
                "name_np" => "गुठिचौर गाउँपालिका",
                "district_label" => "dis63",
                "label" => "lg642"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tatopani Rural Municipality",
                "name_np" => "तातोपानी गाउँपालिका",
                "district_label" => "dis63",
                "label" => "lg643"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Patrasi Rural Municipality",
                "name_np" => "पातारासी गाउँपालिका",
                "district_label" => "dis63",
                "label" => "lg644"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khandachakra Municipality",
                "name_np" => "खाँडाचक्र नगरपालिका",
                "district_label" => "dis64",
                "label" => "lg645"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Raskot Municipality",
                "name_np" => "रास्कोट नगरपालिका",
                "district_label" => "dis64",
                "label" => "lg646"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tilagufa Municipality",
                "name_np" => "तिलागुफा नगरपालिका",
                "district_label" => "dis64",
                "label" => "lg647"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pachal Jharna Rural Municipality",
                "name_np" => "पचालझरना गाउँपालिका",
                "district_label" => "dis64",
                "label" => "lg648"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sanni Triveni Rural Municipality",
                "name_np" => "सान्नी त्रिवेणी गाउँपालिका",
                "district_label" => "dis64",
                "label" => "lg649"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Narharinath Rural Municipality",
                "name_np" => "नरहरिनाथ गाउँपालिका",
                "district_label" => "dis64",
                "label" => "lg650"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kalika Rural Municipality",
                "name_np" => "कालिका गाउँपालिका",
                "district_label" => "dis64",
                "label" => "lg651"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahawai Rural Municipality",
                "name_np" => "महावै गाउँपालिका",
                "district_label" => "dis64",
                "label" => "lg652"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Palata Rural Municipality",
                "name_np" => "पलाता गाउँपालिका",
                "district_label" => "dis64",
                "label" => "lg653"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chhayanath Rara Municipality",
                "name_np" => "छायाँनाथ रारा नगरपालिका",
                "district_label" => "dis65",
                "label" => "lg654"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mugum Karmarong Rural Municipality",
                "name_np" => "मुगुम कार्मारोंग गाउँपालिका",
                "district_label" => "dis65",
                "label" => "lg655"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Soru Rural Municipality",
                "name_np" => "सोरु गाउँपालिका",
                "district_label" => "dis65",
                "label" => "lg656"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khatyad Rural Municipality",
                "name_np" => "खत्याड गाउँपालिका",
                "district_label" => "dis65",
                "label" => "lg657"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Simkot Rural Municipality",
                "name_np" => "सिमकोट गाउँपालिका",
                "district_label" => "dis66",
                "label" => "lg658"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Namkha Rural Municipality",
                "name_np" => "नाम्खा गाउँपालिका",
                "district_label" => "dis66",
                "label" => "lg659"
            ],

            /////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Kharpunath Rural Municipality",
                "name_np" => "खार्पुनाथ गाउँपालिका",
                "district_label" => "dis66",
                "label" => "lg660"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sarkegad Rural Municipality",
                "name_np" => "सर्केगाड गाउँपालिका",
                "district_label" => "dis66",
                "label" => "lg661"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chankheli Rural Municipality",
                "name_np" => "चंखेली गाउँपालिका",
                "district_label" => "dis66",
                "label" => "lg662"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Adanchuli Rural Municipality",
                "name_np" => "अदानचुली गाउँपालिका",
                "district_label" => "dis66",
                "label" => "lg663"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tanjakot Rural Municipality",
                "name_np" => "ताँजाकोट गाउँपालिका",
                "district_label" => "dis66",
                "label" => "lg664"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Badimalika Municipality",
                "name_np" => "बडिमालिका नगरपालिका",
                "district_label" => "dis67",
                "label" => "lg665"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Triveni Municipality",
                "name_np" => "त्रिवेणी नगरपालिका",
                "district_label" => "dis67",
                "label" => "lg666"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Budhiganga Municipality",
                "name_np" => "बुढीगंगा नगरपालिका",
                "district_label" => "dis67",
                "label" => "lg667"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Budhinanda Municipality",
                "name_np" => "बुढीनन्दा नगरपालिका",
                "district_label" => "dis67",
                "label" => "lg668"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gaumul Rural Municipality",
                "name_np" => "गौमुल गाउँपालिका",
                "district_label" => "dis67",
                "label" => "lg669"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pandav Gufa Rural Municipality",
                "name_np" => "पाण्डव गुफा गाउँपालिका",
                "district_label" => "dis67",
                "label" => "lg670"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Swamikartik Rural Municipality",
                "name_np" => "स्वामीकार्तिक गाउँपालिका",
                "district_label" => "dis67",
                "label" => "lg671"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chededaha Rural Municipality",
                "name_np" => "छेडेदह गाउँपालिका",
                "district_label" => "dis67",
                "label" => "lg672"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Himali Rural Municipality",
                "name_np" => "हिमाली गाउँपालिका",
                "district_label" => "dis67",
                "label" => "lg673"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jayaprithvi Municipality",
                "name_np" => "जयपृथ्वी नगरपालिका",
                "district_label" => "dis68",
                "label" => "lg674"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bungal Municipality",
                "name_np" => "बुंगल नगरपालिका",
                "district_label" => "dis68",
                "label" => "lg675"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Talkot Rural Municipality",
                "name_np" => "तलकोट गाँउपालिका",
                "district_label" => "dis68",
                "label" => "lg676"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mashta Rural Municipality",
                "name_np" => "मष्टा गाउँपालिका",
                "district_label" => "dis68",
                "label" => "lg677"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Khaptad Chhanna Rural Municipality",
                "name_np" => "खप्तडछान्ना गाँउपालिका",
                "district_label" => "dis68",
                "label" => "lg678"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Thalara Rural Municipality",
                "name_np" => "थलारा गाँउपालिका",
                "district_label" => "dis68",
                "label" => "lg679"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Vithadchir Rural Municipality",
                "name_np" => "वित्थडचिर गाँउपालिका",
                "district_label" => "dis68",
                "label" => "lg680"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Surma Rural Municipality",
                "name_np" => "सूर्मा गाउँपालिका",
                "district_label" => "dis68",
                "label" => "lg681"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chhabispathibhera Rural Municipality",
                "name_np" => "छबिसपाथिभेरा गाँउपालिका",
                "district_label" => "dis68",
                "label" => "lg682"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Durgathali Rural Municipality",
                "name_np" => "दुर्गाथली गाँउपालिका",
                "district_label" => "dis68",
                "label" => "lg683"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kedarasyu Rural Municipality",
                "name_np" => "केदारस्युँ गाँउपालिका",
                "district_label" => "dis68",
                "label" => "lg684"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kanda Rural Municipality",
                "name_np" => "काँडा गाँउपालिका",
                "district_label" => "dis68",
                "label" => "lg685"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mangalsen Municipality",
                "name_np" => "मंगलसेन नगरपालिका",
                "district_label" => "dis69",
                "label" => "lg686"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kamalbazar Municipality",
                "name_np" => "कमलबजार नगरपालिका",
                "district_label" => "dis69",
                "label" => "lg687"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sanphebagar Municipality",
                "name_np" => "साँफेबगर नगरपालिका",
                "district_label" => "dis69",
                "label" => "lg688"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Panchdeval Binayak Municipality",
                "name_np" => "पंचदेवल विनायक नगरपालिका",
                "district_label" => "dis69",
                "label" => "lg689"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chaurpati Rural Municipality",
                "name_np" => "चौरपाटी गाउँपालिका",
                "district_label" => "dis69",
                "label" => "lg690"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mellekh Rural Municipality",
                "name_np" => "मेल्लेख गाउँपालिका",
                "district_label" => "dis69",
                "label" => "lg691"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bannigadhi Jayagadh Rural Municipality",
                "name_np" => "बान्नीगढ़ी जयगढ़ गाउँपालिका",
                "district_label" => "dis69",
                "label" => "lg692"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ramaroshan Rural Municipality",
                "name_np" => "रामारोशन गाउँपालिका",
                "district_label" => "dis69",
                "label" => "lg693"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhakari Rural Municipality",
                "name_np" => "ढकारी गाउँपालिका",
                "district_label" => "dis69",
                "label" => "lg694"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Turmakhand Rural Municipality",
                "name_np" => "तुर्माखाँद गाउँपालिका",
                "district_label" => "dis69",
                "label" => "lg695"
            ],

            ////////////////////////////////////////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Dipayal Silgadhi Municipality",
                "name_np" => "दिपायल सिलगढ़ी नगरपालिका",
                "district_label" => "dis70",
                "label" => "lg696"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shikhar Municipality",
                "name_np" => "शिखर नगरपालिका",
                "district_label" => "dis70",
                "label" => "lg697"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Purbi Chauki Rural Municipality",
                "name_np" => "पूर्वीचौकी गाउँपालिका",
                "district_label" => "dis70",
                "label" => "lg698"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Badikedar Rural Municipality",
                "name_np" => "बडीकेदार गाउँपालिका",
                "district_label" => "dis70",
                "label" => "lg699"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Jorayal Rural Municipality",
                "name_np" => "जोरायल गाउँपालिका",
                "district_label" => "dis70",
                "label" => "lg700"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sayal Rural Municipality",
                "name_np" => "सायल गाउँपालिका",
                "district_label" => "dis70",
                "label" => "lg701"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Adarsha Rural Municipality",
                "name_np" => "आदर्श गाउँपालिका",
                "district_label" => "dis70",
                "label" => "lg702"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "K.I. Singh Rural Municipality",
                "name_np" => "के.आई.सिं गाउँपालिका",
                "district_label" => "dis70",
                "label" => "lg703"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bogatan Rural Municipality",
                "name_np" => "बोगटान गाउँपालिका",
                "district_label" => "dis70",
                "label" => "lg704"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dhangadhi Sub-Metropolitan City",
                "name_np" => "धनगढी उपमहानगरपालिका",
                "district_label" => "dis71",
                "label" => "lg705"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Tikapur Municipality",
                "name_np" => "टिकापुर नगरपालिका",
                "district_label" => "dis71",
                "label" => "lg706"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ghodaghodi Municipality",
                "name_np" => "घोडाघोडी नगरपालिका",
                "district_label" => "dis71",
                "label" => "lg707"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lamki Chuha Municipality",
                "name_np" => "लम्किचुहा नगरपालिका",
                "district_label" => "dis71",
                "label" => "lg708"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhajani Municipality",
                "name_np" => "भजनी नगरपालिका",
                "district_label" => "dis71",
                "label" => "lg709"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Godawari Municipality",
                "name_np" => "गोदावरी नगरपालिका",
                "district_label" => "dis71",
                "label" => "lg710"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Gauriganga Municipality",
                "name_np" => "गौरीगंगा नगरपालिका",
                "district_label" => "dis71",
                "label" => "lg711"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Janaki Rural Municipality",
                "name_np" => "जानकी गाउँपालिका",
                "district_label" => "dis71",
                "label" => "lg712"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bardagoriya Rural Municipality",
                "name_np" => "बर्दगोरिया गाउँपालिका",
                "district_label" => "dis71",
                "label" => "lg713"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mohanyal Rural Municipality",
                "name_np" => "मोहन्याल गाउँपालिका",
                "district_label" => "dis71",
                "label" => "lg714"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Kailari Rural Municipality",
                "name_np" => "कैलारी गाउँपालिका",
                "district_label" => "dis71",
                "label" => "lg715"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Joshipur Rural Municipality",
                "name_np" => "जोशीपुर गाउँपालिका",
                "district_label" => "dis71",
                "label" => "lg716"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Chure Rural Municipality",
                "name_np" => "चुरे गाउँपालिका",
                "district_label" => "dis71",
                "label" => "lg717"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhimdatta Municipality",
                "name_np" => "भीमदत्त नगरपालिका",
                "district_label" => "dis72",
                "label" => "lg718"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Punarbas Municipality",
                "name_np" => "पुनर्वास नगरपालिका",
                "district_label" => "dis72",
                "label" => "lg719"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bedkot Municipality",
                "name_np" => "बेदकोट नगरपालिका",
                "district_label" => "dis72",
                "label" => "lg720"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahakali Municipality",
                "name_np" => "माहाकाली नगरपालिका",
                "district_label" => "dis72",
                "label" => "lg721"
            ],

            ///////////////////////////////////////////

            [
                "id" => Str::uuid(),
                "name_en" => "Shuklaphanta Municipality",
                "name_np" => "शुक्लाफाँटा नगरपालिका",
                "district_label" => "dis72",
                "label" => "lg722"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Belauri Municipality",
                "name_np" => "बेलौरी नगरपालिका",
                "district_label" => "dis72",
                "label" => "lg723"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Krishnapur Municipality",
                "name_np" => "कृष्णपुर नगरपालिका",
                "district_label" => "dis72",
                "label" => "lg724"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Beldandi Rural Municipality",
                "name_np" => "बेलडाँडी गाउँपालिका",
                "district_label" => "dis72",
                "label" => "lg725"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Laljhadi Rural Municipality",
                "name_np" => "लालझाडी गाउँपालिका",
                "district_label" => "dis72",
                "label" => "lg726"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Amargadhi Municipality",
                "name_np" => "अमरगढी नगरपालिका",
                "district_label" => "dis73",
                "label" => "lg727"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Parshuram Municipality",
                "name_np" => "परशुराम नगरपालिका",
                "district_label" => "dis73",
                "label" => "lg728"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Alital Rural Municipality",
                "name_np" => "आलिताल गाँउपालिका",
                "district_label" => "dis73",
                "label" => "lg729"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Bhageshwar Rural Municipality",
                "name_np" => "भागेश्वर गाउँपालिका",
                "district_label" => "dis73",
                "label" => "lg730"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Nawadurga Rural Municipality",
                "name_np" => "नवदुर्गा गाउँपालिका",
                "district_label" => "dis73",
                "label" => "lg731"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ajayameru Rural Municipality",
                "name_np" => "अजयमेरु गाउँपालिका",
                "district_label" => "dis73",
                "label" => "lg732"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Ganyapdhura Rural Municipality",
                "name_np" => "गन्यापधुरा गाउँपालिका",
                "district_label" => "dis73",
                "label" => "lg733"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dasharathchand Municipality",
                "name_np" => "दशरथचन्द नगरपालिका",
                "district_label" => "dis74",
                "label" => "lg734"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Patan Municipality",
                "name_np" => "पाटन नगरपालिका",
                "district_label" => "dis74",
                "label" => "lg735"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Melaulee Municipality",
                "name_np" => "मेलौली नगरपालिका",
                "district_label" => "dis74",
                "label" => "lg736"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Purchaudi Municipality",
                "name_np" => "पुर्चौडी नगरपलिका",
                "district_label" => "dis74",
                "label" => "lg737"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Surnaya Rural Municipality",
                "name_np" => "सुर्नया गाउँपालिका",
                "district_label" => "dis74",
                "label" => "lg738"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Sigas Rural Municipality",
                "name_np" => "सिगास गाउँपालिका",
                "district_label" => "dis74",
                "label" => "lg739"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shivanath Rural Municipality",
                "name_np" => "शिवनाथ गाउँपालिका",
                "district_label" => "dis74",
                "label" => "lg740"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Pancheshwar Rural Municipality",
                "name_np" => "पन्चेश्वर गाउँपालिका",
                "district_label" => "dis74",
                "label" => "lg741"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dogadakedar Rural Municipality",
                "name_np" => "दोगडाकेदार गाउँपालिका",
                "district_label" => "dis74",
                "label" => "lg742"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Dilasaini Rural Municipality",
                "name_np" => "डीलासैनी गाउँपलिका",
                "district_label" => "dis74",
                "label" => "lg743"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Mahakali Municipality",
                "name_np" => "महाकाली नगरपालिका",
                "district_label" => "dis75",
                "label" => "lg744"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Shailyashikhar Municipality",
                "name_np" => "शैल्यशिखर नगरपालिका",
                "district_label" => "dis75",
                "label" => "lg745"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Malikarjun Rural Municipality",
                "name_np" => "मालिकार्जुन गाउँपालिका",
                "district_label" => "dis75",
                "label" => "lg746"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Api Himal Rural Municipality",
                "name_np" => "अपिहिमाल गाउँपालिका",
                "district_label" => "dis75",
                "label" => "lg747"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Duhu Rural Municipality",
                "name_np" => "दुहुँ गाउँपालिका",
                "district_label" => "dis75",
                "label" => "lg748"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Naugad Rural Municipality",
                "name_np" => "नौगाड गाउँपालिका",
                "district_label" => "dis75",
                "label" => "lg749"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Marma Rural Municipality",
                "name_np" => "मार्मा गाउँपालिका",
                "district_label" => "dis75",
                "label" => "lg750"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Lekam Rural Municipality",
                "name_np" => "लेकम गाउँपालिका",
                "district_label" => "dis75",
                "label" => "lg751"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Byas Rural Municipality",
                "name_np" => "व्याँस गाउँपालिका",
                "district_label" => "dis75",
                "label" => "lg752"
            ],
            [
                "id" => Str::uuid(),
                "name_en" => "Rajdevi Rural Municipality",
                "name_np" => "राजदेवी गाउँपालिका",
                "district_label" => "dis20",
                "label" => "lg753"
            ]
        ];

        // Insert the local governments data into the database
        DB::table('local_governments')->insert($localGovernments);
    }
}
