const objPrintingTable = {
    v_report: function () {
        $('#main').load("/forms-html/view-table.html", function () {
          /*  $('.dates').each(function () {
                $(this).datepicker({dateFormat: "dd.mm.yy"});
                $(this).mask('99.99.9999');
            });
            $('.dates').attr('autocomplete', 'off');
            $('.asdasdfagasdasd').on('focus');*/
            $('#reports_btn').click(function () {
                var doctor1 = $('#doctor').val();
                var receipt = $('#date_and_time_of_receipt');
                var discharge = $('#date_and_time_of_discharge');
                var receiptConv = utils.convertDate(receipt.val());
                var dischargeConv = utils.convertDate(discharge.val());


                utils.Ajax({
                    url: "/source/administration/report121.php",
                    data: {
                        doctor: doctor1,
                        date_and_time_of_receipt: receiptConv,
                        date_and_time_of_discharge: dischargeConv
                    },
                    Success: function (result) {
                        console.log(result);
                        if (doctor1 === 'v')
                        {
                            var num = 0;
                            var primary_inspection = 0;
                            var primary_inspection_no = 0;

                            var sanitary_hygienic_characteristics = 0;
                            var sanitary_hygienic_characteristics_no = 0;

                            var history_disease = 0;
                            var history_disease_no = 0;

                            var anamnesis_of_life = 0;
                            var anamnesis_of_life_no = 0;

                            var objective_status = 0;
                            var objective_status_no = 0;

                            var respiratory_system = 0;
                            var respiratory_system_no = 0;

                            var cardiovascular_system = 0;
                            var cardiovascular_system_no = 0;

                            var digestive_system = 0;
                            var digestive_system_no = 0;

                            var urinary_system = 0;
                            var urinary_system_no = 0;

                            var local_status = 0;
                            var local_status_no = 0;

                            var primary_neurological_status = 0;
                            var primary_neurological_status_no = 0;
                            if (result.no_data)
                            {
                                alert("Данные не найдены, попробуйте изменить параметры!")
                            }
                            var content = '';
                            content += '<table id="tableId" class="table table-bordered table-sm table2excel_with_colors">';
                            content += '<th class="align-middle text-center"><b>№</b></th>';
                            content += '<th class="align-middle text-center"><b>Пациенты</b></th>';
                            content += '<th class="align-middle text-center"><b>Дата поступления</b></th>';
                            content += '<th class="align-middle text-center"><b>Дата выписки</b></th>';
                            content += '<th class="align-middle text-center"><b>Жалобы</b></th>';
                            //content += '<th class="align-middle text-center"><b>Проф анамнез</b></th>';
                            content += '<th class="align-middle text-center"><b>Сан гиг хар</b></th>';
                            content += '<th class="align-middle text-center"><b>Ан заболевания</b></th>';
                            content += '<th class="align-middle text-center"><b>Ан жизни</b></th>';
                            content += '<th class="align-middle text-center"><b>Объек статус</b></th>';
                            content += '<th class="align-middle text-center"><b>Сис орган дыхания</b></th>';
                            content += '<th class="align-middle text-center"><b>Серд-сосуд сис</b></th>';
                            content += '<th class="align-middle text-center"><b>Сис орган пищ</b></th>';
                            content += '<th class="align-middle text-center"><b>Мочевыдел сис</b></th>';
                            content += '<th class="align-middle text-center"><b>Локал статус</b></th>';
                            content += '<th class="align-middle text-center"><b>Неврол сис</b></th>';
                            content += '<tr>';
                            content += '<td colspan="15" class="table-success">Врач: <b>Иващенко Ирина Евгеньевна</b></td>';
                            content += '</tr>';
                            for (var iden in result['inpatient_medical_record'])
                            {
                                //console.log(result['inpatient_medical_record'][iden]['full_name']);
                                if (!result['inpatient_medical_record'].hasOwnProperty(iden))
                                {
                                    continue;
                                }
                                content += '<tr>';
                                var doctor = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['doctor']
                                    ? result['inpatient_medical_record'][iden]['doctor'] : '---';

                                if (doctor === 'к.м.н. Иващенко Ирина Евгеньевна')
                                {
                                    num++;
                                    var full_name = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['full_name']
                                        ? result['inpatient_medical_record'][iden]['full_name'] : '---';
                                    //same things
                                    var date_and_time_of_receipt = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_receipt']
                                        ? result['inpatient_medical_record'][iden]['date_and_time_of_receipt'] : "---";
                                    // if (result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_receipt'])
                                    // {
                                    //     date_and_time_of_receipt = result['inpatient_medical_record'][iden]['date_and_time_of_receipt'];
                                    // }
                                    // else
                                    // {
                                    //     date_and_time_of_receipt = "dasdasd";
                                    // }
                                    var date_and_time_of_discharge = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_discharge']
                                        ? result['inpatient_medical_record'][iden]['date_and_time_of_discharge'] : "---";

                                    content += '<td class="align-middle text-center">' + num + '</td>';
                                    content += '<td class="align-middle text-center">' + full_name + '</td>';
                                    content += '<td class="align-middle text-center">' + date_and_time_of_receipt + '</td>';
                                    content += '<td class="align-middle text-center">' + date_and_time_of_discharge + '</td>';
                                    if (!result['primary_inspection'] || !result['primary_inspection'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        primary_inspection_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        primary_inspection++;
                                    }
                                    /*if (!result['professional_route']||!result['professional_route'][iden])
                                    {
                                        content +='<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';

                                    }
                                    else
                                    {
                                        content +='<td class="align-middle text-center">Заполнено</td>';
                                    }*/
                                    if (!result['sanitary_hygienic_characteristics'] || !result['sanitary_hygienic_characteristics'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        sanitary_hygienic_characteristics_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        sanitary_hygienic_characteristics++;
                                    }
                                    if (!result['history_disease'] || !result['history_disease'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        history_disease++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        history_disease++;
                                    }
                                    if (!result['anamnesis_of_life'] || !result['anamnesis_of_life'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        anamnesis_of_life++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        anamnesis_of_life++;
                                    }
                                    if (!result['objective_status'] || !result['objective_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        objective_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        objective_status++;
                                    }
                                    if (!result['respiratory_system'] || !result['respiratory_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        respiratory_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        respiratory_system++;
                                    }
                                    if (!result['cardiovascular_system'] || !result['cardiovascular_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        cardiovascular_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        cardiovascular_system++;
                                    }
                                    if (!result['digestive_system'] || !result['digestive_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        digestive_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        digestive_system++;
                                    }
                                    if (!result['urinary_system'] || !result['urinary_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        urinary_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        urinary_system++;
                                    }
                                    if (!result['local_status'] || !result['local_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Не подлежит заполнению</td>';
                                        local_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        local_status++;
                                    }
                                    if (!result['primary_neurological_status'] || !result['primary_neurological_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Не подлежит заполнению</td>';
                                        primary_neurological_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        primary_neurological_status++;
                                    }
                                    content += '</tr>';
                                }

                            }
                            content += '<tr class="align-middle">';
                            content += '<td class="font-weight-bold" colspan="4">Итого ' + num + '</td>';
                            content += '<td>Зап: <b>' + primary_inspection + '</b><br>Не зап: <b>' + primary_inspection_no + '</b></td>';
                            //content +='<td>проф</td>';
                            content += '<td>Зап: <b>' + sanitary_hygienic_characteristics + '</b><br>Не зап: <b>' + sanitary_hygienic_characteristics_no + '</b></td>';
                            content += '<td>Зап: <b>' + history_disease + '</b><br>Не зап: <b>' + history_disease_no + '</b></td>';
                            content += '<td>Зап: <b>' + anamnesis_of_life + '</b><br>Не зап: <b>' + anamnesis_of_life_no + '</b></td>';
                            content += '<td>Зап: <b>' + objective_status + '</b><br>Не зап: <b>' + objective_status_no + '</b></td>';
                            content += '<td>Зап: <b>' + respiratory_system + '</b><br>Не зап: <b>' + respiratory_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + cardiovascular_system + '</b><br>Не зап: <b>' + cardiovascular_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + digestive_system + '</b><br>Не зап: <b>' + digestive_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + urinary_system + '</b><br>Не зап: <b>' + urinary_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + local_status + '</b><br>Не зап: <b>' + local_status_no + '</b></td>';
                            content += '<td>Зап: <b>' + primary_neurological_status + '</b></td>';
                            //content +='<td>Зап: <b>'+primary_neurological_status+'</b><br>Не зап: <b>'+primary_neurological_status_no+'</b></td>';
                            content += '</tr>';

                            var num = 0;
                            var primary_inspection = 0;
                            var primary_inspection_no = 0;

                            var sanitary_hygienic_characteristics = 0;
                            var sanitary_hygienic_characteristics_no = 0;

                            var history_disease = 0;
                            var history_disease_no = 0;

                            var anamnesis_of_life = 0;
                            var anamnesis_of_life_no = 0;

                            var objective_status = 0;
                            var objective_status_no = 0;

                            var respiratory_system = 0;
                            var respiratory_system_no = 0;

                            var cardiovascular_system = 0;
                            var cardiovascular_system_no = 0;

                            var digestive_system = 0;
                            var digestive_system_no = 0;

                            var urinary_system = 0;
                            var urinary_system_no = 0;

                            var local_status = 0;
                            var local_status_no = 0;

                            var primary_neurological_status = 0;
                            var primary_neurological_status_no = 0;

                            content += '<tr>';
                            content += '<td colspan="15" class="table-success">Врач: <b>Карленко Олеся Константиновна</b></td>';
                            content += '</tr>';
                            for (var iden in result['inpatient_medical_record'])
                            {
                                //console.log(result['inpatient_medical_record'][iden]['full_name']);
                                if (!result['inpatient_medical_record'].hasOwnProperty(iden))
                                {
                                    continue;
                                }
                                content += '<tr>';
                                var doctor = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['doctor']
                                    ? result['inpatient_medical_record'][iden]['doctor'] : '---';

                                if (doctor === 'Карленко Олеся Константиновна')
                                {
                                    num++;
                                    var full_name = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['full_name']
                                        ? result['inpatient_medical_record'][iden]['full_name'] : '---';
                                    //same things
                                    var date_and_time_of_receipt = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_receipt']
                                        ? result['inpatient_medical_record'][iden]['date_and_time_of_receipt'] : "---";
                                    // if (result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_receipt'])
                                    // {
                                    //     date_and_time_of_receipt = result['inpatient_medical_record'][iden]['date_and_time_of_receipt'];
                                    // }
                                    // else
                                    // {
                                    //     date_and_time_of_receipt = "dasdasd";
                                    // }
                                    var date_and_time_of_discharge = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_discharge']
                                        ? result['inpatient_medical_record'][iden]['date_and_time_of_discharge'] : "---";

                                    content += '<td class="align-middle text-center">' + num + '</td>';
                                    content += '<td class="align-middle text-center">' + full_name + '</td>';
                                    content += '<td class="align-middle text-center">' + date_and_time_of_receipt + '</td>';
                                    content += '<td class="align-middle text-center">' + date_and_time_of_discharge + '</td>';
                                    if (!result['primary_inspection'] || !result['primary_inspection'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        primary_inspection_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        primary_inspection++;
                                    }
                                    /*if (!result['professional_route']||!result['professional_route'][iden])
                                    {
                                        content +='<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';

                                    }
                                    else
                                    {
                                        content +='<td class="align-middle text-center">Заполнено</td>';
                                    }*/
                                    if (!result['sanitary_hygienic_characteristics'] || !result['sanitary_hygienic_characteristics'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        sanitary_hygienic_characteristics_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        sanitary_hygienic_characteristics++;
                                    }
                                    if (!result['history_disease'] || !result['history_disease'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        history_disease++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        history_disease++;
                                    }
                                    if (!result['anamnesis_of_life'] || !result['anamnesis_of_life'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        anamnesis_of_life++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        anamnesis_of_life++;
                                    }
                                    if (!result['objective_status'] || !result['objective_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        objective_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        objective_status++;
                                    }
                                    if (!result['respiratory_system'] || !result['respiratory_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        respiratory_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        respiratory_system++;
                                    }
                                    if (!result['cardiovascular_system'] || !result['cardiovascular_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        cardiovascular_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        cardiovascular_system++;
                                    }
                                    if (!result['digestive_system'] || !result['digestive_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        digestive_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        digestive_system++;
                                    }
                                    if (!result['urinary_system'] || !result['urinary_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        urinary_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        urinary_system++;
                                    }
                                    if (!result['local_status'] || !result['local_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Не подлежит заполнению</td>';
                                        local_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        local_status++;
                                    }
                                    if (!result['primary_neurological_status'] || !result['primary_neurological_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        primary_neurological_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        primary_neurological_status++;
                                    }
                                    content += '</tr>';
                                }

                            }
                            content += '<tr class="align-middle">';
                            content += '<td class="font-weight-bold" colspan="4">Итого: ' + num + '  </td>';
                            content += '<td>Зап: <b>' + primary_inspection + '</b><br>Не зап: <b>' + primary_inspection_no + '</b></td>';
                            //content +='<td></td>';
                            content += '<td>Зап: <b>' + sanitary_hygienic_characteristics + '</b><br>Не зап: <b>' + sanitary_hygienic_characteristics_no + '</b></td>';
                            content += '<td>Зап: <b>' + history_disease + '</b><br>Не зап: <b>' + history_disease_no + '</b></td>';
                            content += '<td>Зап: <b>' + anamnesis_of_life + '</b><br>Не зап: <b>' + anamnesis_of_life_no + '</b></td>';
                            content += '<td>Зап: <b>' + objective_status + '</b><br>Не зап: <b>' + objective_status_no + '</b></td>';
                            content += '<td>Зап: <b>' + respiratory_system + '</b><br>Не зап: <b>' + respiratory_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + cardiovascular_system + '</b><br>Не зап: <b>' + cardiovascular_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + digestive_system + '</b><br>Не зап: <b>' + digestive_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + urinary_system + '</b><br>Не зап: <b>' + urinary_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + local_status + '</b><br>Не зап: <b>' + local_status_no + '</b></td>';
                            content += '<td>Зап: <b>' + primary_neurological_status + '</b><br>Не зап: <b>' + primary_neurological_status_no + '</b></td>';
                            content += '</tr>';

                            var num = 0;
                            var primary_inspection = 0;
                            var primary_inspection_no = 0;

                            var sanitary_hygienic_characteristics = 0;
                            var sanitary_hygienic_characteristics_no = 0;

                            var history_disease = 0;
                            var history_disease_no = 0;

                            var anamnesis_of_life = 0;
                            var anamnesis_of_life_no = 0;

                            var objective_status = 0;
                            var objective_status_no = 0;

                            var respiratory_system = 0;
                            var respiratory_system_no = 0;

                            var cardiovascular_system = 0;
                            var cardiovascular_system_no = 0;

                            var digestive_system = 0;
                            var digestive_system_no = 0;

                            var urinary_system = 0;
                            var urinary_system_no = 0;

                            var local_status = 0;
                            var local_status_no = 0;

                            var primary_neurological_status = 0;
                            var primary_neurological_status_no = 0;

                            content += '<tr>';
                            content += '<td colspan="15" class="table-success">Врач: <b>Онищук Ярослава Игоревна</b></td>';
                            content += '</tr>';
                            for (var iden in result['inpatient_medical_record'])
                            {
                                //console.log(result['inpatient_medical_record'][iden]['full_name']);
                                if (!result['inpatient_medical_record'].hasOwnProperty(iden))
                                {
                                    continue;
                                }
                                content += '<tr>';
                                var doctor = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['doctor']
                                    ? result['inpatient_medical_record'][iden]['doctor'] : '---';

                                if (doctor === 'Онищук Ярослава Игоревна')
                                {
                                    num++;
                                    var full_name = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['full_name']
                                        ? result['inpatient_medical_record'][iden]['full_name'] : '---';
                                    //same things
                                    var date_and_time_of_receipt = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_receipt']
                                        ? result['inpatient_medical_record'][iden]['date_and_time_of_receipt'] : "---";
                                    // if (result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_receipt'])
                                    // {
                                    //     date_and_time_of_receipt = result['inpatient_medical_record'][iden]['date_and_time_of_receipt'];
                                    // }
                                    // else
                                    // {
                                    //     date_and_time_of_receipt = "dasdasd";
                                    // }
                                    var date_and_time_of_discharge = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_discharge']
                                        ? result['inpatient_medical_record'][iden]['date_and_time_of_discharge'] : "---";

                                    content += '<td class="align-middle text-center">' + num + '</td>';
                                    content += '<td class="align-middle text-center">' + full_name + '</td>';
                                    content += '<td class="align-middle text-center">' + date_and_time_of_receipt + '</td>';
                                    content += '<td class="align-middle text-center">' + date_and_time_of_discharge + '</td>';
                                    if (!result['primary_inspection'] || !result['primary_inspection'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        primary_inspection_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        primary_inspection++;
                                    }
                                    /* if (!result['professional_route']||!result['professional_route'][iden])
                                     {
                                         content +='<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';

                                     }
                                     else
                                     {
                                         content +='<td class="align-middle text-center">Заполнено</td>';
                                     }*/
                                    if (!result['sanitary_hygienic_characteristics'] || !result['sanitary_hygienic_characteristics'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        sanitary_hygienic_characteristics_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        sanitary_hygienic_characteristics++;
                                    }
                                    if (!result['history_disease'] || !result['history_disease'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        history_disease++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        history_disease++;
                                    }
                                    if (!result['anamnesis_of_life'] || !result['anamnesis_of_life'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        anamnesis_of_life++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        anamnesis_of_life++;
                                    }
                                    if (!result['objective_status'] || !result['objective_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        objective_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        objective_status++;
                                    }
                                    if (!result['respiratory_system'] || !result['respiratory_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        respiratory_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        respiratory_system++;
                                    }
                                    if (!result['cardiovascular_system'] || !result['cardiovascular_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        cardiovascular_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        cardiovascular_system++;
                                    }
                                    if (!result['digestive_system'] || !result['digestive_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        digestive_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        digestive_system++;
                                    }
                                    if (!result['urinary_system'] || !result['urinary_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        urinary_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        urinary_system++;
                                    }
                                    if (!result['local_status'] || !result['local_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Не подлежит заполнению</td>';
                                        local_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        local_status++;
                                    }
                                    if (!result['primary_neurological_status'] || !result['primary_neurological_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        primary_neurological_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        primary_neurological_status++;
                                    }
                                    content += '</tr>';
                                }

                            }
                            content += '<tr class="align-middle">';
                            content += '<td class="font-weight-bold" colspan="4">Итого: ' + num + '  </td>';
                            content += '<td>Зап: <b>' + primary_inspection + '</b><br>Не зап: <b>' + primary_inspection_no + '</b></td>';
                            //content +='<td></td>';
                            content += '<td>Зап: <b>' + sanitary_hygienic_characteristics + '</b><br>Не зап: <b>' + sanitary_hygienic_characteristics_no + '</b></td>';
                            content += '<td>Зап: <b>' + history_disease + '</b><br>Не зап: <b>' + history_disease_no + '</b></td>';
                            content += '<td>Зап: <b>' + anamnesis_of_life + '</b><br>Не зап: <b>' + anamnesis_of_life_no + '</b></td>';
                            content += '<td>Зап: <b>' + objective_status + '</b><br>Не зап: <b>' + objective_status_no + '</b></td>';
                            content += '<td>Зап: <b>' + respiratory_system + '</b><br>Не зап: <b>' + respiratory_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + cardiovascular_system + '</b><br>Не зап: <b>' + cardiovascular_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + digestive_system + '</b><br>Не зап: <b>' + digestive_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + urinary_system + '</b><br>Не зап: <b>' + urinary_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + local_status + '</b><br>Не зап: <b>' + local_status_no + '</b></td>';
                            content += '<td>Зап: <b>' + primary_neurological_status + '</b><br>Не зап: <b>' + primary_neurological_status_no + '</b></td>';
                            content += '</tr>';


                            var num = 0;
                            var primary_inspection = 0;
                            var primary_inspection_no = 0;

                            var sanitary_hygienic_characteristics = 0;
                            var sanitary_hygienic_characteristics_no = 0;

                            var history_disease = 0;
                            var history_disease_no = 0;

                            var anamnesis_of_life = 0;
                            var anamnesis_of_life_no = 0;

                            var objective_status = 0;
                            var objective_status_no = 0;

                            var respiratory_system = 0;
                            var respiratory_system_no = 0;

                            var cardiovascular_system = 0;
                            var cardiovascular_system_no = 0;

                            var digestive_system = 0;
                            var digestive_system_no = 0;

                            var urinary_system = 0;
                            var urinary_system_no = 0;

                            var local_status = 0;
                            var local_status_no = 0;

                            var primary_neurological_status = 0;
                            var primary_neurological_status_no = 0;

                            content += '<tr>';
                            content += '<td colspan="15" class="table-success">Врач: <b>Радоуцкая Елена Юрьевна</b></td>';
                            content += '</tr>';
                            for (var iden in result['inpatient_medical_record'])
                            {
                                //console.log(result['inpatient_medical_record'][iden]['full_name']);
                                if (!result['inpatient_medical_record'].hasOwnProperty(iden))
                                {
                                    continue;
                                }
                                content += '<tr>';
                                var doctor = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['doctor']
                                    ? result['inpatient_medical_record'][iden]['doctor'] : '---';

                                if (doctor === 'доц. Радоуцкая Елена Юрьевна')
                                {
                                    num++;
                                    var full_name = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['full_name']
                                        ? result['inpatient_medical_record'][iden]['full_name'] : '---';
                                    //same things
                                    var date_and_time_of_receipt = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_receipt']
                                        ? result['inpatient_medical_record'][iden]['date_and_time_of_receipt'] : "---";
                                    // if (result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_receipt'])
                                    // {
                                    //     date_and_time_of_receipt = result['inpatient_medical_record'][iden]['date_and_time_of_receipt'];
                                    // }
                                    // else
                                    // {
                                    //     date_and_time_of_receipt = "dasdasd";
                                    // }
                                    var date_and_time_of_discharge = result['inpatient_medical_record'][iden] && result['inpatient_medical_record'][iden]['date_and_time_of_discharge']
                                        ? result['inpatient_medical_record'][iden]['date_and_time_of_discharge'] : "---";

                                    content += '<td class="align-middle text-center">' + num + '</td>';
                                    content += '<td class="align-middle text-center">' + full_name + '</td>';
                                    content += '<td class="align-middle text-center">' + date_and_time_of_receipt + '</td>';
                                    content += '<td class="align-middle text-center">' + date_and_time_of_discharge + '</td>';
                                    if (!result['primary_inspection'] || !result['primary_inspection'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        primary_inspection_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        primary_inspection++;
                                    }
                                    /*if (!result['professional_route']||!result['professional_route'][iden])
                                    {
                                        content +='<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';

                                    }
                                    else
                                    {
                                        content +='<td class="align-middle text-center">Заполнено</td>';
                                    }*/
                                    if (!result['sanitary_hygienic_characteristics'] || !result['sanitary_hygienic_characteristics'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        sanitary_hygienic_characteristics_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        sanitary_hygienic_characteristics++;
                                    }
                                    if (!result['history_disease'] || !result['history_disease'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        history_disease++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        history_disease++;
                                    }
                                    if (!result['anamnesis_of_life'] || !result['anamnesis_of_life'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        anamnesis_of_life++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        anamnesis_of_life++;
                                    }
                                    if (!result['objective_status'] || !result['objective_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        objective_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        objective_status++;
                                    }
                                    if (!result['respiratory_system'] || !result['respiratory_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        respiratory_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        respiratory_system++;
                                    }
                                    if (!result['cardiovascular_system'] || !result['cardiovascular_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        cardiovascular_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        cardiovascular_system++;
                                    }
                                    if (!result['digestive_system'] || !result['digestive_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        digestive_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        digestive_system++;
                                    }
                                    if (!result['urinary_system'] || !result['urinary_system'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        urinary_system_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        urinary_system++;
                                    }
                                    if (!result['local_status'] || !result['local_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center">Не подлежит заполнению</td>';
                                        local_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        local_status++;
                                    }
                                    if (!result['primary_neurological_status'] || !result['primary_neurological_status'][iden])
                                    {
                                        content += '<td class="align-middle text-center" bgcolor="#d63e6e">Нет данных</td>';
                                        primary_neurological_status_no++;
                                    }
                                    else
                                    {
                                        content += '<td class="align-middle text-center">Заполнено</td>';
                                        primary_neurological_status++;
                                    }
                                    content += '</tr>';
                                }

                            }
                            content += '<tr class="align-middle">';
                            content += '<td class="font-weight-bold" colspan="4">Итого: ' + num + '  </td>';
                            content += '<td>Зап: <b>' + primary_inspection + '</b><br>Не зап: <b>' + primary_inspection_no + '</b></td>';
                            //content +='<td></td>';
                            content += '<td>Зап: <b>' + sanitary_hygienic_characteristics + '</b><br>Не зап: <b>' + sanitary_hygienic_characteristics_no + '</b></td>';
                            content += '<td>Зап: <b>' + history_disease + '</b><br>Не зап: <b>' + history_disease_no + '</b></td>';
                            content += '<td>Зап: <b>' + anamnesis_of_life + '</b><br>Не зап: <b>' + anamnesis_of_life_no + '</b></td>';
                            content += '<td>Зап: <b>' + objective_status + '</b><br>Не зап: <b>' + objective_status_no + '</b></td>';
                            content += '<td>Зап: <b>' + respiratory_system + '</b><br>Не зап: <b>' + respiratory_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + cardiovascular_system + '</b><br>Не зап: <b>' + cardiovascular_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + digestive_system + '</b><br>Не зап: <b>' + digestive_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + urinary_system + '</b><br>Не зап: <b>' + urinary_system_no + '</b></td>';
                            content += '<td>Зап: <b>' + local_status + '</b><br>Не зап: <b>' + local_status_no + '</b></td>';
                            content += '<td>Зап: <b>' + primary_neurological_status + '</b><br>Не зап: <b>' + primary_neurological_status_no + '</b></td>';
                            content += '</tr>';

                            content += '</table>';
                            //content += '<input type="button" class="btn btn-outline-danger btn-sm table2excel btn-sm" value="Экспорт в excel" id="pechat222">';

                            $('#page_content').html(content);

                        }
                    }
                })

            });
        });
    },
}

var $print = $('#print');
$print.on('click', function () {
    pdfMake.fonts = {
        myFont: {
            normal: 'Times_New_Roman.ttf',
            bold: 'Times_New_Roman_Bold.ttf',
            italics: 'Times_New_Roman_Italic.ttf',
            bolditalics: 'Times_New_Roman_Bold_Italic.ttf'
        }
    };

    var body = [];
    body.push([
        {text: '№', style: 'header'},
        {
            text: 'Кто добовлял информацию для расчета риска',
            style: 'header'
        },
        {
            text: 'Пациент',
            style: 'header'
        },
    ]);
    var obj_result = {
        defaultStyle: {
            font: 'myFont'
        },
        //1,2,3,4
        // 1- отсуп от левого края
        //2 отсуп сверху
        //3-от правого края
        //4- снизу
        pageMargins: [25, 30, 25, 35],
        content: [
            {
                table: {
                    /*widths: [
                        12, 80, 60, 70, 70, 70, 85,
                    ], */
                    widths: [
                        12, 180, 180
                    ],
                    body: [],
                    headerRows: 1
                }
            }
        ],
        //pageOrientation: 'landscape',
        styles: {
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            header: {
                fontSize: 12,
                bold: true,
                alignment: 'center'
            },
            paragraph: {
                fontSize: 10,
                margin: [0, 0, 0, 0],
                alignment: 'vertically',

                width: 'auto'
            },
            paragraph_footer: {
                fontSize: 9,
                margin: [25, 2, 0, 0],
                alignment: 'center',
                bold: true,
                width: 'auto'
            }
        }
    };
    obj_result.content[0].table.body = body;
    pdfMake.createPdf(obj_result).print();
});