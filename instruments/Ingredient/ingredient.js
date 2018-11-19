
$( document ).ready(function() {
    $("#buttonSubmit").click(function(){
        var enName = $("#engNameIngredient").val();
        var ruName = $("#rusNameIngredient").val();
        var urlImage = $("#imageUrl").val();
        var calories = $("#calories").val();
        var sttime = $("#sttime").val();
        var gindex = $("#gindex").val();
        var stconditions = $("#stconditions").val();
        var price = $("#price").val();
        var ingredientType = $("#selectTypeIngredient").val();


        var string = "sc_node_not_relation -> concept_"+enName+";;\n" +
            "\n" +
            "concept_"+enName+" => nrel_main_idtf:\n" +
            "["+ruName+"] (* <- lang_ru;; *);\n" +
            "["+enName+"] (* <- lang_en;; *);;\n" +
            "concept_"+enName+" <- concept_ingridient;;\n" +
            "concept_"+enName+"<- rrel_key_sc_element: ...\n" +
            "(*\n" +
            "<-sc_illustration;;\n" +
            "<=nrel_sc_text_translation:\n" +
            "...\n" +
            "(*\n" +
            "->rrel_example: \"file://"+urlImage+"\"\n" +
            "(*\n" +
            "=> nrel_format: format_jpg;;\n" +
            "*);;\n" +
            "*);;\n" +
            "*);;\n" +
            "concept_"+enName+" => nrel_type:"+ingredientType+";;\n" +
            "concept_"+enName+" => nrel_kkal : "+calories+"_kkal\n" +
            "(*\n" +
            "=> nrel_main_idtf:\n" +
            "["+calories+" ккал]\n" +
            "(*\n" +
            "<- lang_ru;;\n" +
            "*);;\n" +
            "<- concept_kkal;;\n" +
            "*);;\n" +
            "concept_"+enName+" => nrel_price : "+price+"_rub\n" +
            "(*\n" +
            "=> nrel_main_idtf:\n" +
            "["+price+" рубль]\n" +
            "(*\n" +
            "<- lang_ru;;\n" +
            "*);;\n" +
            "<- concept_price;;\n" +
            "*);;\n" +
            "concept_"+enName+" => nrel_storage_time: "+sttime.replace(/\s+/g,"_")+"\n" +
            "(*\n" +
            "=> nrel_main_idtf:\n" +
            "["+sttime+"]\n" +
            "(*\n" +
            "<- lang_ru;;\n" +
            "*);;\n" +
            "<- concept_time;;\n" +
            "*);;\n" +
            "concept_"+enName+" => nrel_storage_conditions: "+stconditions.replace(/\s+/g,"_")+"\n" +
            "(*\n" +
            "=> nrel_main_idtf:\n" +
            "["+stconditions+"]\n" +
            "(*\n" +
            "<- lang_ru;;\n" +
            "*);;\n" +
            "*);;\n" +
            "concept_"+enName+"=> nrel_glycemic_index: "+gindex+"\n" +
            "\n" +
            "(*\n" +
            "=> nrel_main_idtf:\n" +
            "["+gindex+"]\n" +
            "(*\n" +
            "<- lang_ru;;\n" +
            "*);;\n" +
            "<- concept_glycemic_index;;\n" +
            "*);;";
        $("#form7").val(string);
    });
    $("#buttonCopy").click(function(){
        $("#form7").select();
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    });
});