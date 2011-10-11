Ext.define('NAF.view.Search', {
    extend: 'Ext.form.Panel',
    alias: 'widget.search',
    title: 'Søk',

    items: [
        {
            xtype: 'textfield',
            hideLabel: true,
            flex: 1
        },
        {
            xtype: 'label',
            forId: 'myFieldId',
            text: 'My Awesome Field',
            margins: '0 0 0 10'
        }
    ]
});