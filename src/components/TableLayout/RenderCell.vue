<script lang="ts">
    import {Prop, Vue} from 'vue-property-decorator';

    export default class RenderCell extends Vue {
        @Prop(Object)
        public row: object | undefined;

        @Prop(String)
        public prop: string | undefined;

        @Prop(Function)
        public renderCell: any;

        @Prop()
        public render(h: any, ctx: any) {
            return ctx.props.renderCell(h, ctx.props.row, ctx.props.prop);
        }
    }
</script>