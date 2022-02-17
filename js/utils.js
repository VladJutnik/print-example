var utils = {

    MakeOption: function (value) {
        return '<option value="' + value + '">' + value + '</option>';
    },

    MakeOptions: function (options) {
        var length = options.length;
        var result = '';
        for (var i = 0; i < length; i++)
        {
            result += utils.MakeOption(options[i]);
        }
        return result;
    },

    SelectOption: function ($elem, item) {
        var children = $elem.children();
        children.each(function () {
            if ($(this).val() === item)
            {
                $(this).prop('selected', true);
            }
        })
    },

    DIV: function (create_or_delete, params) {
        switch (create_or_delete)
        {
            case 'CREATE':
                $('<div/>', params);
                break;
            case "DELETE":
                $('#' + params.id).remove();
                break;
        }
    },

    POPUP: function (params) {
        var id_modalwin = params.id_modalwin ? params.id_modalwin : '';
        var content = params.content;
        var left = params.left ? params.left : '10%';
        var right = params.right ? params.right : '10%';
        var top = params.top ? params.top : '20%';
        var bottom = params.bottom ? params.bottom : '';
        if (content !== 'DELETE')
        {
            $('<div/>', {
                id: 'shadow',
                'class': 'shadow',
                css: {
                    display: 'block',
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    'z-index': 1,
                    background: '#000',
                    opacity: 0.5,
                    left: 0,
                    top: 0
                },
                appendTo: "body"
            });
            $('<div/>', {
                id: id_modalwin,
                'class': 'modalwin',
                css: {
                    display: 'block',
                    background: '#fff',
                    top: top,
                    right: right,
                    left: left,
                    bottom: bottom,
                    'font-size': '14px',
                    margin: '0 auto',
                    'z-index': 2, /* поверх всех */
                    position: 'fixed', /* фиксированное позиционирование, окно стабильно при прокрутке */
                    padding: '15px',
                    border: '1px solid #383838'
                },
                append: content,
                appendTo: "body"
            });
        }
        else
        {
            $('#' + id_modalwin).remove();
            $('#shadow').remove();
        }
    },

    POPUP333: function (params) {
        $('#' + params.id_modalwin).remove();
        var title_modalwin = params.title_modalwin ? params.title_modalwin : '';
        var size = params.size ? params.size : 'modal-lg';
        var cls = params.cls ? params.cls : '';
        var content = '';
        if (content !== 'DELETE')
        {
            content += '<div class="modal" id="' + params.id_modalwin + '" >';
            content += '<div class="modal-dialog ' + size + ' ' + cls + '">';
            content += '<div class="modal-content">';

            content += '<div class="modal-header">';
            content += '<h4 class="modal-title" >' + title_modalwin + '</h4>';
            content += '<button type="button" id="clsbtn" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
            content += '</div>';

            content += '<div class="modal-body">';
            content += params.content;
            content += '</div>';
            /*
            content += '<div class="modal-footer">';
            content += '<button type="button" id="clsbtn" class="btn btn-secondary" data-dismiss="modal">Close</button>';
            //content += '<button type="button" class="btn btn-primary">Save changes</button>';
            content += '</div>';
            */
            content += '</div>';
            content += '</div>';
            content += '</div>';
        }
        $('#result').append(content);
        $("#" + params.id_modalwin).modal('show');
    },

    convertDate: function (txt) {
        var txt_year = txt.substr(6, 4);
        var txt_month = txt.substr(3, 2);
        var txt_day = txt.substr(0, 2);
        return txt_year + '-' + txt_month + '-' + txt_day;
    },

    /**
     * @return {string}
     * */

    MakeTr: function (params) {
        var tr_id = params.tr_id ? 'id="' + params.tr_id + '"' : '';
        var tr_width = params.tr_width ? 'width="' + params.tr_width + '"' : '';
        var attrs = params.attres ? params.attres : '';
        var result = '';
        var id = params.id ? 'id="' + params.id + '" ' : '';
        var th_id = params.th_id ? 'id="' + params.th_id + '" ' : '';
        var classes = params.classes ? 'class="' + params.classes + '" ' : '';
        var value = params.value ? 'value="' + params.value + '" ' : '';
        var colspan = params.colspan ? params.colspan : '';
        var readonly = params.readonly ? params.readonly : '';
        var selected;
        var placeholder = params.placeholder ? 'placeholder="' + params.placeholder + '" ' : '';
        var header_width = params.header_width ? 'width="' + params.header_width + '" ' : '';
        var classesTH = params.classesTH ? 'class="' + params.classesTH + '" ' : '';

        if (params.type === 'text')
        {
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >'
                + params.header +
                '</th>' +
                '<td ' + colspan + ' ><input ' + readonly + ' ' +
                'type="text" ' +
                placeholder + ' ' +
                id + ' ' +
                attrs + ' ' +
                classes + ' ' +
                value +
                'name="' + params.name + '"' +
                '/> </td>' +
                '</tr>'
        }

        if (params.type === 'hidden')
        {
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td ' + colspan + ' ><input ' + readonly + ' ' +
                'type="hidden" ' +
                placeholder + ' ' +
                id + ' ' +
                attrs + ' ' +
                classes + ' ' +
                value +
                'name="' + params.name + '"' +
                '/> </td>' +
                '</tr>'
        }

        if (params.type === 'text_check')
        { //проверка на пустые значения и удаление tr
            if (value === '')
            {
            }
            else
            {
                result += '<tr ' + tr_id + '>' +
                    '<th ' + tr_width + ' >' +
                    params.header +
                    '</th>' +
                    '<td ' + colspan + ' ><input ' + readonly + ' ' +
                    'type="text" ' +
                    placeholder + ' ' +
                    id + ' ' +
                    attrs + ' ' +
                    classes + ' ' +
                    value +
                    'name="' + params.name + '"' +
                    '/> </td>' +
                    '</tr>'
            }
        }
        if (params.type === 'header') {
            result += '<tr ' + tr_id + '>' +
                '<th ' + classesTH + ' colspan="2"><h5 class="text-center" style="margin: 0; border: 0">' +
                params.header +
                '</h5></th></tr>';
            //result += '<option selected value="'+params.selected+'">'+params.selected+'</option>';
        }
        if (params.type === 'textarea')
        {
            value = params.value ? params.value : '';
            result += '<tr ' + tr_id + '>' +
                '<th  ' + tr_width + th_id + '>' +
                params.header +
                '</th>' +
                '<td ' + colspan + ' ><textarea ' + readonly + '' +
                'type="text" ' +
                'rows="12" ' +
                placeholder + ' ' +
                id + ' ' +
                attrs + ' ' +
                classes + ' name="' + params.name + '"' +
                '>' + value + '</textarea></td>' +
                '</tr>'
        }
        if (params.type === 'textarea1')
        {
            value = params.value ? params.value : '';
            result += '<tr ' + tr_id + '>' +
                '<th  ' + tr_width + th_id + '>' +
                params.header +
                '</th>' +
                '<td ' + colspan + ' ><textarea ' + readonly + '' +
                'type="text" ' +
                'rows="1" ' +
                placeholder + ' ' +
                id + ' ' +
                attrs + ' ' +
                classes + ' name="' + params.name + '"' +
                '>' + value + '</textarea></td>' +
                '</tr>'
        }
        if (params.type === 'textarea2')
        {
            value = params.value ? params.value : '';
            result += '<tr ' + tr_id + '>' +
                '<th  ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td ' + colspan + ' ><textarea ' + readonly + '' +
                'type="text" ' +
                'rows="2" ' +
                placeholder + ' ' +
                id + ' ' +
                attrs + ' ' +
                classes + ' name="' + params.name + '"' +
                '>' + value + '</textarea></td>' +
                '</tr>'
        }
        if (params.type === 'textarea_check')
        {
            if (value === '')
            {
            }
            else
            {
                value = params.value ? params.value : '';
                result += '<tr ' + tr_id + '>' +
                    '<th ' + tr_width + ' >' +
                    params.header +
                    '</th>' +
                    '<td><textarea ' + readonly + '' +
                    'type="text" ' +
                    placeholder + ' ' +
                    id + ' ' +
                    attrs + ' ' +
                    classes + ' name="' + params.name + '"' +
                    '>' + value + '</textarea></td>' +
                    '</tr>'
            }
        }

        if (params.type === 'td')
        {
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td>' +
                params.name +
                ' </td>' +
                '</tr>'
        }

        if (params.type === 'select')
        {
            var val2 = params.value !== undefined ? params.value : "";
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td' + colspan + '><select ' +
                attrs + ' ' +
                id +
                classes + ' ' +
                'name="' + params.name + '"' +
                '>';

            if (val2 !== "")
            {
                if (params.selected === params.options[i])
                {
                    selected = 'selected';
                }
                else
                {
                    selected = '';
                }
                result += '<option ' + selected + ' value="' + val2 + '">' + val2 + '</option>'
            }
            var num = params.options.length;
            for (var i = 0; i < num; i++)
            {
                if (params.selected === params.options[i])
                {
                    selected = 'selected';
                }
                else selected = '';
                result += '<option ' + selected + ' value="' + params.options[i] + '">' + params.options[i] + '</option>'
            }
            //result += '<option selected value="'+params.selected+'">'+params.selected+'</option>';
            result += ' </select></td>' +
                '</tr>';
        }

        if (params.type === 'checkbox')
        {
            result += '<tr>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td><input type="checkbox" ' +
                'class="for" ' +
                '>';
        }

        if (params.type === 'number')
        {
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td><input ' +
                'type="number" ' +
                attrs + ' ' +
                id +
                value +
                classes + ' name="' + params.name + '"' +
                '/> </td>' +
                '</tr>'
        }

        if (params.type === '2number')
        {
            var value1 = params.value1 ? 'value="' + params.value1 + '" ' : '';
            var value2 = params.value2 ? 'value="' + params.value2 + '" ' : '';
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td><input ' +
                'type="number" ' +
                id +
                value1 +
                'class="inputs form-control" ' +
                'name="' + params.name1 + '"' +
                '/> </td>' +
                '<td><input ' +
                'type="number" ' +
                id +
                value2 +
                'class="inputs form-control" ' +
                'name="' + params.name2 + '"' +
                '/> </td>' +
                '</tr>'
        }
        return result;
    },

    MakeTr2: function (params) {
        var tr_id = params.tr_id ? 'id="' + params.tr_id + '"' : '';
        var tr_width = params.tr_width ? 'width="' + params.tr_width + '"' : '';
        var attrs = params.attres ? params.attres : '';
        var result = '';
        var id = params.id ? 'id="' + params.id + '" ' : '';
        var th_id = params.th_id ? 'id="' + params.th_id + '" ' : '';
        var classes = params.classes ? 'class="' + params.classes + '" ' : '';
        var value = params.value ? 'value="' + params.value + '" ' : '';
        var colspan = params.colspan ? params.colspan : '';
        var readonly = params.readonly ? params.readonly : '';
        var selected;
        var placeholder = params.placeholder ? 'placeholder="' + params.placeholder + '" ' : '';

        if (params.type === 'text')
        {
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >'
                + params.header +
                '</th>' +
                '<td ' + colspan + ' ><input ' + readonly + ' ' +
                'type="text" ' +
                placeholder + ' ' +
                id + ' ' +
                attrs + ' ' +
                classes + ' ' +
                value +
                'name=`' + params.name + '`' +
                '/> </td>' +
                '</tr>'
        }

        if (params.type === 'hidden')
        {
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td ' + colspan + ' ><input ' + readonly + ' ' +
                'type="hidden" ' +
                placeholder + ' ' +
                id + ' ' +
                attrs + ' ' +
                classes + ' ' +
                value +
                'name="' + params.name + '"' +
                '/> </td>' +
                '</tr>'
        }

        if (params.type === 'text_check')
        { //проверка на пустые значения и удаление tr
            if (value === '')
            {
            }
            else
            {
                result += '<tr ' + tr_id + '>' +
                    '<th ' + tr_width + ' >' +
                    params.header +
                    '</th>' +
                    '<td ' + colspan + ' ><input ' + readonly + ' ' +
                    'type="text" ' +
                    placeholder + ' ' +
                    id + ' ' +
                    attrs + ' ' +
                    classes + ' ' +
                    value +
                    'name="' + params.name + '"' +
                    '/> </td>' +
                    '</tr>'
            }
        }

        if (params.type === 'textarea')
        {
            value = params.value ? params.value : '';
            result += '<tr ' + tr_id + '>' +
                '<th  ' + tr_width + th_id + '>' +
                params.header +
                '</th>' +
                '<td ' + colspan + ' ><textarea ' + readonly + '' +
                'type="text" ' +
                'rows="12" ' +
                placeholder + ' ' +
                id + ' ' +
                attrs + ' ' +
                classes + ' name="' + params.name + '"' +
                '>' + value + '</textarea></td>' +
                '</tr>'
        }
        if (params.type === 'textarea1')
        {
            value = params.value ? params.value : '';
            result += '<tr ' + tr_id + '>' +
                '<th  ' + tr_width + th_id + '>' +
                params.header +
                '</th>' +
                '<td ' + colspan + ' ><textarea ' + readonly + '' +
                'type="text" ' +
                'rows="1" ' +
                placeholder + ' ' +
                id + ' ' +
                attrs + ' ' +
                classes + ' name="' + params.name + '"' +
                '>' + value + '</textarea></td>' +
                '</tr>'
        }
        if (params.type === 'textarea2')
        {
            value = params.value ? params.value : '';
            result += '<tr ' + tr_id + '>' +
                '<th  ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td ' + colspan + ' ><textarea ' + readonly + '' +
                'type="text" ' +
                'rows="2" ' +
                placeholder + ' ' +
                id + ' ' +
                attrs + ' ' +
                classes + ' name="' + params.name + '"' +
                '>' + value + '</textarea></td>' +
                '</tr>'
        }
        if (params.type === 'textarea_check')
        {
            if (value === '')
            {
            }
            else
            {
                value = params.value ? params.value : '';
                result += '<tr ' + tr_id + '>' +
                    '<th ' + tr_width + ' >' +
                    params.header +
                    '</th>' +
                    '<td><textarea ' + readonly + '' +
                    'type="text" ' +
                    placeholder + ' ' +
                    id + ' ' +
                    attrs + ' ' +
                    classes + ' name="' + params.name + '"' +
                    '>' + value + '</textarea></td>' +
                    '</tr>'
            }
        }

        if (params.type === 'td')
        {
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td>' +
                params.name +
                ' </td>' +
                '</tr>'
        }

        if (params.type === 'select')
        {
            var val2 = params.value !== undefined ? params.value : "";
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td' + colspan + '><select ' +
                attrs + ' ' +
                id +
                classes + ' ' +
                'name="' + params.name + '"' +
                '>';

            if (val2 !== "")
            {
                if (params.selected === params.options[i])
                {
                    selected = 'selected';
                }
                else
                {
                    selected = '';
                }
                result += '<option ' + selected + ' value="' + val2 + '">' + val2 + '</option>'
            }
            var num = params.options.length;
            for (var i = 0; i < num; i++)
            {
                if (params.selected === params.options[i])
                {
                    selected = 'selected';
                }
                else selected = '';
                result += '<option ' + selected + ' value="' + params.options[i] + '">' + params.options[i] + '</option>'
            }
            //result += '<option selected value="'+params.selected+'">'+params.selected+'</option>';
            result += ' </select></td>' +
                '</tr>';
        }

        if (params.type === 'checkbox')
        {
            result += '<tr>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td><input type="checkbox" ' +
                'class="for" ' +
                '>';
        }

        if (params.type === 'number')
        {
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td><input ' +
                'type="number" ' +
                attrs + ' ' +
                id +
                value +
                classes + ' name="' + params.name + '"' +
                '/> </td>' +
                '</tr>'
        }

        if (params.type === '2number')
        {
            var value1 = params.value1 ? 'value="' + params.value1 + '" ' : '';
            var value2 = params.value2 ? 'value="' + params.value2 + '" ' : '';
            result += '<tr ' + tr_id + '>' +
                '<th ' + tr_width + ' >' +
                params.header +
                '</th>' +
                '<td><input ' +
                'type="number" ' +
                id +
                value1 +
                'class="inputs form-control" ' +
                'name="' + params.name1 + '"' +
                '/> </td>' +
                '<td><input ' +
                'type="number" ' +
                id +
                value2 +
                'class="inputs form-control" ' +
                'name="' + params.name2 + '"' +
                '/> </td>' +
                '</tr>'
        }
        return result;
    },

    Ajax: function (params)// declaration
    {
        if (params.async === undefined)
        {
            params.async = true;
        }
        $.ajax({
            dataType: 'json',
            url: params.url,
            type: 'POST',
            data: params.data,
            async: params.async,
            /*beforeSend: function ()
             {
             if(!params.notUseImage)
             $('#load_image').css('display', 'block');
             },
             complete :function ()
             {
             if(!params.notUseImage)
             $('#load_image').css('display', 'none');
             },*/
            success: function (result) {
                /* if (result.error)
                 {
                 if(!params.notUseImage)
                 $('#load_image').css('display', 'none');
                 throw result.error.msg;
                 }
                 else
                 {
                 if(!params.notUseImage)
                 {
                 var $complete_image = $('#complete_image');
                 $complete_image.css('display', 'block');
                 $complete_image.stop().fadeToggle('slow');
                 }*/
                if (result.out)
                {
                    console.log(result.out);
                }
                params.Success(result);
                //}
            },
            // error: function (request, status, error)
            // {
            //     alert(request.responseText);
            //     $('#load_image').css('display', 'none');
            // }
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0)
                {
                    msg = 'Not connect.\n Verify Network.';
                }
                else if (jqXHR.status === 404)
                {
                    msg = 'Requested page not found. [404]';
                }
                else if (jqXHR.status === 500)
                {
                    msg = 'Internal Server Error [500].';
                }
                else if (exception === 'parsererror')
                {
                    msg = 'Requested JSON parse failed.';
                }
                else if (exception === 'timeout')
                {
                    msg = 'Time out error.';
                }
                else if (exception === 'abort')
                {
                    msg = 'Ajax request aborted.';
                }
                else
                {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                // $('#load_image').css('display', 'none');
                alert(msg);
            }
        });
    },

    Save: function (class_name, table_name, func_name, condition, where, url, notUseImage, success) {
        // if(notUseImage===undefined)
        // {
        //     notUseImage = false;
        // }
        var ar = [];
        var name = [];
        var num = 0;
        $('.' + class_name).each(function () {
            if ($(this).hasClass('form-check-input'))
            {
                name[num] = $(this).attr("name");
                ar[num] = $(this).prop('checked') ? 'on' : 'off';
                num++;
            }
            else
            {
                name[num] = $(this).attr("name");
                ar[num] = $(this).val();
                num++;
            }
        });
        if (condition)
        {
            var data = {
                where: where,
                ar: ar,
                name: name,
                num: num,
                table: table_name,
                func: func_name
            };
            console.log(data);
            $.ajax({
                dataType: 'json',
                url: url,
                type: 'POST',
                data: data,
                success: function (result) {
                    if (result.error)
                    {
                        throw result.error.msg;
                    }
                    else
                    {
                        console.log(result.out);
                        /*if(!notUseImage)
                         {
                         var $complete_image = $('#complete_image');
                         $complete_image.css('display', 'block');
                         $complete_image.stop().fadeToggle('slow');
                         }*/
                        if (success)
                            success();
                    }
                },
                /* beforeSend : function ()
                 {
                 if(!notUseImage)
                 $('#load_image').css('display', 'block');
                 },
                 complete :function ()
                 {
                 if(!notUseImage)
                 {
                 $('#load_image').css('display', 'none');
                 setTimeout(image_set.HideCompleteImage(), 0);
                 }

                 },*/
                error: function (request, status, error) {
                    /*console.log(request.responseText);
                    if(!notUseImage)
                     {
                     $('#load_image').css('display', 'none');
                     }*/
                }
            });
        }
    },

    Save2: function (class_name, table_name, func_name, condition, where, url, notUseImage, success, saveEmpty) {
        var ar = [];
        var name = [];
        var num = 0;
        $('.' + class_name).each(function () {
            if ($(this).hasClass('form-check-input'))
            {
                name[num] = $(this).attr("name");
                ar[num] = $(this).prop('checked') ? 'on' : 'off';
                num++;
            }
            else
            {
                name[num] = $(this).attr("name");
                ar[num] = $(this).val();
                num++;
            }
        });
        if (condition)
        {
            var data = {
                where: where,
                ar: ar,
                name: name,
                num: num,
                table: table_name,
                func: func_name,
                saveEmpty: !!saveEmpty
            };
            console.log(data);
            $.ajax({
                dataType: 'json',
                url: url,
                type: 'POST',
                data: data,
                success: function (result) {
                    if (result.error)
                    {
                        throw result.error.msg;
                    }
                    else
                    {
                        console.log(result.out);
                        /*if(!notUseImage)
                         {
                         var $complete_image = $('#complete_image');
                         $complete_image.css('display', 'block');
                         $complete_image.stop().fadeToggle('slow');
                         }*/
                        if (success)
                            success();
                    }
                },
                /* beforeSend : function ()
                 {
                 if(!notUseImage)
                 $('#load_image').css('display', 'block');
                 },
                 complete :function ()
                 {
                 if(!notUseImage)
                 {
                 $('#load_image').css('display', 'none');
                 setTimeout(image_set.HideCompleteImage(), 0);
                 }

                 },*/
                error: function (request, status, error) {
                    //console.log(request.responseText);
                    /*if(!notUseImage)
                     {
                     $('#load_image').css('display', 'none');
                     }*/
                }
            });
        }
    },

    InsertOrUpdate: function (class_name, table_name, condition, where, url, success, db) {
        var ar = [];
        var name = [];
        var num = 0;
        $('.' + class_name).each(function () {
            if ($(this).hasClass('form-check-input'))
            {
                name[num] = $(this).attr("name");
                ar[num] = $(this).prop('checked') ? 'on' : 'off';
                num++;
            }
            else
            {
                name[num] = $(this).attr("name");
                ar[num] = $(this).val();
                num++;
            }
        });
        if (condition)
        {
            $.ajax({
                dataType: 'json',
                url: url,
                type: 'POST',
                data: {
                    where: where,
                    ar: ar,
                    name: name,
                    num: num,
                    table: table_name,
                    db: db ? db : ""
                },
                success: function (result) {
                    if (result.error)
                    {
                        throw result.error.msg;
                    }
                    else
                    {
                        console.log(result.out);
                        var $complete_image = $('#complete_image');
                        $complete_image.css('display', 'block');
                        $complete_image.stop().fadeToggle('slow');

                    }
                    if (success)
                        success()
                },
                beforeSend: function () {
                    $('#load_image').css('display', 'block');
                },
                complete: function () {
                    $('#load_image').css('display', 'none');
                    image_set.HideCompleteImage();

                },
                error: function (request, status, error) {
                    //alert(request.responseText);
                    $('#load_image').css('display', 'none');
                }
            });
        }
    },

    InsOrUpd: function (params) {
        var className = params.className ? params.className : "inputs";
        var tableName = params.tableName ? params.tableName : "";
        var condition = true;
        var where = params.where !== undefined ? params.where : "";
        var url = params.url !== undefined ? params.url : DEFAULT_INSERT_OR_UPDATE_PATH;
        var db = params.db !== undefined ? params.db : "";
        var success = params.success !== undefined ? params.success : function () {

        };
        utils.InsertOrUpdate(className, tableName, condition, where, url, success, db);
    },

    Query: function (params) {
        var url = params.url ? params.url : "/source/utils/query.php";
        var db = params.db ? params.db : '';
        var result_type = params.result_type ? params.result_type : '';
        var notUseImage = params.notUseImage ? params.notUseImage : true;
        if (!params.query) {
            throw "no query in params";
        }
        var query = params.query;
        var Success = params.Success ? params.Success : function (result) {
            if (result) {
                console.log(result);
            }
        };
        utils.Ajax({
            url: url,
            data: {
                query: query,
                db: db,
                result_type: result_type
            },
            notUseImage: notUseImage,
            Success: Success
        })
    },
};
