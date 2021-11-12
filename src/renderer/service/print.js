export class JSONFormat {

    constructor() {

    }

    getChars(str, repeat) {
        let val = "";

        if (repeat > 0) {
            for (let i = 0; i < repeat; i++) {
                val = val.concat(str);
            }
        }
        return val;
    }

    /**
     * 计算最后\n....\n 之间的距离
     * @param str
     * @returns {number|*}
     */
    findLastNewLineLength(str) {
        if (!str) {
            return 0;
        }

        let lastIndexOf = str.lastIndexOf("\n");
        if (lastIndexOf === -1) {
            return 0;
        }

        let lastSecond = str.substr(0, lastIndexOf).lastIndexOf("\n");
        if (lastSecond === -1) {
            return lastIndexOf
        } else {
            return lastIndexOf - lastSecond;
        }
    }

    /**
     * 根据类型获取字符串的打印值
     * @param value
     * @returns {string|boolean|number|*}
     */


    getStrByType(value) {
        if (typeof value === 'string') {
            return "\"" + value + "\"";
        } else if (typeof value === 'number') {
            return value;
        } else if (typeof value === 'boolean') {
            return value;
        } else {
            return value;
        }
    }


    isArray(value) {
        if (typeof value === 'object' && Array.isArray(value)) {
            return true;
        } else {
            return false;
        }
    }


    buildObjectStr(obj, build, level) {
        if (!obj) {
            return build;
        }

        //打印大括号
        level += 4;
        if (this.isArray(obj)) {
            build.str = build.str.concat("[")

        } else {
            build.str = build.str.concat("{")
        }


        for (let key in obj) {
            if ((typeof obj[key] == 'object') && (!Array.isArray(obj[key]))) {
                build.str = build.str.concat("\n", this.getChars(" ", level), "\"", key, "\":");
                // null值处理
                if (obj[key] === null) {
                    build.str = build.str.concat("null,");
                } else {
                    this.buildObjectStr(obj[key], build, level);
                }
            } else if ((typeof obj[key] == 'object') && (Array.isArray(obj[key]))) {
                build.str = build.str.concat("\n", this.getChars(" ", level), "\"", key, "\":");
                if (obj[key] === null) {
                    build.str = build.str.concat("null,");
                } else {
                    this.buildObjectStr(obj[key], build, level);
                }
            } else {

                if (Array.isArray(obj)) {
                    build.str = build.str.concat("\n", this.getChars(" ", level), this.getStrByType(obj[key]), ",");
                } else {
                    build.str = build.str.concat("\n", this.getChars(" ", level), "\"", key, "\":", this.getStrByType(obj[key]), ",");
                }

            }
        }

        // 打印大括号
        if (this.isArray(obj)) {
            build.str = build.str.concat("\n", this.getChars(" ", level - 4), " ]");
        } else {
            build.str = build.str.concat("\n", this.getChars(" ", level - 4), " }");
        }

        return build;
    }


    /**
     * 获取带颜色key
     * @param key
     * @returns {string}
     */
    getColorKeyHtmlStr(key) {
        return `<span class="type-key">"${key}"</span>`;
    }


    /**
     * 获取带颜色的值
     * @param value
     * @returns {string}
     */
    getColorValueHtmlStr(value) {
        if (typeof value === 'string') {
            return `<span class="type-string">"${value}"</span>`;
        } else if (typeof value === 'number') {
            return `<span class="type-number">${value}</span>`;
        } else if (typeof value === 'boolean') {
            return `<span class="type-boolean">${value}</span>`;
        } else {
            return value;
        }
    }

    getColorNullHtmlStr() {
        return `<span class="type-null">null</span>,`;
    }

    getStartEndFlag(isStart, isArray,type,size) {
        if (isStart === 1) {
            if (isArray === 1) {
                return `<span data-type="${type}" data-size="${size}"><i class="obj-open minus-flag" ></i>[`;
            } else {
                return `<span data-type="${type}" data-size="${size}"><i class="obj-open minus-flag" ></i>{`;
            }
        } else {
            if (isArray === 1) {
                return `]</span>`;
            } else {
                return `}</span>`;
            }
        }

    }


    /**
     * 构建打印html
     * @param obj
     * @param build
     * @param level
     * @returns {*}
     */
    buildObjectHtmlStr(obj, build, level) {
        if (!obj) {
            return build;
        }

        //打印大括号
        level += 4;
        if (this.isArray(obj)) {
            build.str = build.str.concat(this.getStartEndFlag(1, 1,'array',obj.length))

        } else {
            build.str = build.str.concat(this.getStartEndFlag(1, 0,typeof obj,0))
        }


        for (let key in obj) {
            if ((typeof obj[key] == 'object') && (!Array.isArray(obj[key]))) {
                // 对象是对象
                build.str = build.str.concat("<br>", this.getChars("&nbsp;", level), this.getColorKeyHtmlStr(key), ":");
                // null值处理
                if (obj[key] === null) {
                    build.str = build.str.concat(this.getColorNullHtmlStr());
                } else {
                    this.buildObjectHtmlStr(obj[key], build, level);
                }
            } else if ((typeof obj[key] == 'object') && (Array.isArray(obj[key]))) {
                // 对象是数组

                build.str = build.str.concat("<br>", this.getChars("&nbsp;", level), this.getColorKeyHtmlStr(key), ":");
                if (obj[key] === null) {
                    build.str = build.str.concat(this.getColorNullHtmlStr());
                } else {
                    this.buildObjectHtmlStr(obj[key], build, level);
                }
            } else {

                if (Array.isArray(obj)) {
                    // 渲染数组中的某一项
                    build.str = build.str.concat("<br>", this.getChars("&nbsp;", level), this.getColorValueHtmlStr(obj[key]), ",");
                } else {
                    build.str = build.str.concat("<br>", this.getChars("&nbsp;", level), this.getColorKeyHtmlStr(key), ":", this.getColorValueHtmlStr(obj[key]), ",");
                }

            }
        }

        // 打印大括号
        if (this.isArray(obj)) {
            build.str = build.str.concat("<br>", this.getChars("&nbsp;", level - 4), "&nbsp;", this.getStartEndFlag(0, 1,'Array',obj.length));
        } else {
            build.str = build.str.concat("<br>", this.getChars("&nbsp;", level - 4), "&nbsp;", this.getStartEndFlag(0, 0,typeof obj,0));
        }

        return build;
    }


    /**
     * 获取打印的str
     * @param obj
     * @returns {string}
     */
    getJSONFormattedStr(obj) {
        let build = {
            str: ""
        };
        this.buildObjectStr(obj, build, 0);

        return build.str;
    }

    /**
     * 获取打印的html数据
     * @param obj
     * @returns {string}
     */
    getJSONFormattedHtmlStr(obj) {
        let build = {
            str: ""
        };
        this.buildObjectHtmlStr(obj, build, 0);

        return build.str;
    }


}
















