const objPrintingTable = {
    v_report: function () {
        $('#main').load("../forms-html/view-table.html", function () {
            $('#reports_btn').click(function () {
                utils.Ajax({
                    url: "/php/report1.php",
                    data: {
                        type: $('#type').val(),
                        date_start: $('#date_start').val(),
                        date_end: $('#date_end').val()
                    },
                    Success: function (result) {
                        console.log(result);
                        let content = '';
                        let body = [];
                        if(result){
                            body.push([
                                {text: '№', style: 'header'},
                                {
                                    text: 'Название',
                                    style: 'header'
                                },
                                {
                                    text: 'Описание',
                                    style: 'header'
                                },
                            ]);
                            content += '<table id="tableId" class="table table-bordered table-sm table2excel_with_colors">';
                            content += '<tr><th class="align-middle text-center"><b>№</b></th>';
                            content += '<th class="align-middle text-center"><b>Название</b></th>';
                            content += '<th class="align-middle text-center"><b>Описание</b></th></tr>';

                            for (let iden in result)
                            {
                                content += '' +
                                    '<tr><th class="align-middle text-center"><b>'+result[iden]['num']++ +'</b></th>' +
                                    '<td class="align-middle text-center"><b>'+result[iden]['name']+'</b></td>' +
                                    '<td class="align-middle text-center"><b>'+result[iden]['title']+'</b></td></tr>';
                                body.push([
                                    {text: result[iden]['num']++, style: 'header'},
                                    {
                                        text: result[iden]['name'],
                                        style: 'paragraph'
                                    },
                                    {
                                        text: result[iden]['title'],
                                        style: 'paragraph'
                                    },
                                ]);
                            }
                            content += '<input type="button" class="btn btn-outline-danger form-control btn-sm mt-3 mb-3" value="Экспорт в pdf" id="print">'

                            $('#page_content').html(content);

                            let $print = $('#print');
                            $print.on('click', function () {
                                contentPrint = [
                                    {
                                        table: {
                                            /*widths: [
                                                12, 80, 60, 70, 70, 70, 85,
                                            ], */
                                            widths: [
                                                12, 180, 180
                                            ],
                                            body: body,
                                            headerRows: 1
                                        }
                                    }
                                ];
                                objPrintingTable.print(contentPrint);

                            });
                        }
                        else {
                            content += '<div class="alert alert-danger" role="alert">' +
                                'Данных не найдено!' +
                                '</div>';
                            $('#page_content').html(content);
                        }

                    }
                })

            });
        });
    },
    close: function () {
        $('#main').html('');
    },
    print: function (content) {
        pdfMake.fonts = {
            myFont: {
                normal: 'Times_New_Roman.ttf',
                bold: 'Times_New_Roman_Bold.ttf',
                italics: 'Times_New_Roman_Italic.ttf',
                bolditalics: 'Times_New_Roman_Bold_Italic.ttf'
            }
        };

        let obj_result = {
            defaultStyle: {
                font: 'myFont'
            },
            //1,2,3,4
            // 1- отсуп от левого края
            //2 отсуп сверху
            //3-от правого края
            //4- снизу
            pageMargins: [25, 30, 25, 35],
            content: content,
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
                    fontSize: 12,
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
        pdfMake.createPdf(obj_result).print();

    },
}
